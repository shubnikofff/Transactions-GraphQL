import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import { Currency, Transaction } from '../types/transaction';
import { TransactionFormValues } from '../types/form';
import { QueryTransactionsData } from '../types/query';
import * as MutationTypes from '../types/mutation';

const queryTransactions = loader('./gql/queryTransactions.graphql');
const mutationAddTransaction = loader('./gql/mutationAddTransaction.graphql');
const mutationUpdateTransaction = loader('./gql/mutationUpdateTransaction.graphql');
const mutationDeleteTransaction = loader('./gql/mutationDeleteTransaction.graphql');

function useTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [currencyOptions, setCurrencyOptions] = useState<Currency[]>([]);

    const { loading, error } = useQuery<QueryTransactionsData>(queryTransactions, {
        onCompleted: (data) => {
            if (data) {
                setTransactions(data.transactions);
                setCurrencyOptions(data.enumCurrency.enumValues.map(value => value.name));
            }
        }
    });

    const [addTransaction] = useMutation<MutationTypes.MutationAddTransactionData, MutationTypes.MutationAddTransactionVariables>(
        mutationAddTransaction,
        {
            onCompleted: ({ addTransaction }) => {
                setTransactions([...transactions, { ...addTransaction }])
            },
        });

    const add = (values: TransactionFormValues) => {
        return addTransaction({
            variables: {
                transaction: {
                    ...values,
                    amount: parseFloat(values.amount),
                },
            }
        });
    };

    const [updateTransaction] = useMutation<MutationTypes.MutationUpdateTransactionData, MutationTypes.MutationUpdateTransactionVariables>(
        mutationUpdateTransaction,
        {
            onCompleted: ({ updateTransaction: { id, uuid, currency, amount } }) => {
                setTransactions(transactions.map((transaction) =>
                    transaction.id === id
                        ? { id, uuid, currency, amount }
                        : transaction));
            }
        });

    const update = (id: string, values: TransactionFormValues) => {
        return updateTransaction({
            variables: {
                id,
                transaction: {
                    ...values,
                    amount: parseFloat(values.amount),
                },
            }
        });
    }

    const [deleteTransaction] = useMutation<MutationTypes.MutationDeleteTransactionData, MutationTypes.MutationDeleteTransactionVariables>(
        mutationDeleteTransaction,
        {
            onCompleted: ({ deleteTransaction }) => {
                setTransactions(transactions.filter(transaction => transaction.id !== deleteTransaction.id));
            }
        });

    const remove = (id: string) => {
        return deleteTransaction({
            variables: { id }
        });
    }

    return {
        add,
        remove,
        update,
        loading,
        error,
        currencyOptions,
        transactions,
    };
}

export default useTransactions;
