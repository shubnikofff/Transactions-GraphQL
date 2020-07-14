import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import { Transaction } from '../types/transaction';
import { TransactionFormValues } from '../types/form';
import { ExecutionResult } from 'graphql';

const queryTransactions = loader('./gql/queryTransactions.graphql');
const mutationAddTransaction = loader('./gql/mutationAddTransaction.graphql');

interface QueryTransactionsResponse {
    transactions: Transaction[]
}

export function useTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const { loading, error } = useQuery<QueryTransactionsResponse>(queryTransactions, {
        onCompleted: (data ) => {
            if(data) {
                setTransactions(data.transactions);
            }
        }
    });

    const [addTransaction] = useMutation(mutationAddTransaction);

    const add = (formValues: TransactionFormValues) => {
        addTransaction({
            variables: {
                transaction: {
                    ...formValues,
                    amount: parseFloat(formValues.amount),
                },
            }
        }).then(console.log);
            // .then(({ data }: ExecutionResult<Transaction>) => {
            // co
            // if (data) {
            //     setTransactions([
            //         {
            //             id: data.id,
            //             uuid: data.uuid,
            //             currency: data.currency,
            //             amount: data.amount,
            //         },
            //         ...transactions,
            //     ]);
            // }
        // });
    };

    return {
        add,
        loading,
        error,
        transactions,
    };
}
