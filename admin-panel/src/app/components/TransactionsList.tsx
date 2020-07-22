import React from 'react';
import styled from 'styled-components'

import { ExecutionResult } from 'graphql';

import TransactionsListItem from './TransactionsListItem';

import { Currency, Transaction } from './types/transaction';
import { TransactionFormValues } from './types/form';

interface TransactionsListProps {
    currencyOptions: Currency[];
    error?: Error;
    loading: boolean;
    removeTransaction: (id: string) => Promise<ExecutionResult<any>>;
    transactions: Transaction[];
    updateTransaction: (id: string, values: TransactionFormValues) => Promise<ExecutionResult<any>>;
}

const Header = styled.div`
  display: grid;
  padding: 1rem 0;
  grid-template-columns: 1fr 3fr 2fr 2fr 2fr;
  border-bottom: 1px solid lightgrey;
`;

function TransactionsList({ loading, error, currencyOptions, transactions, removeTransaction, updateTransaction }: TransactionsListProps) {
    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    if (error) {
        return (
            <p>{error.message}</p>
        )
    }

    return (
        <>
            <Header>
                <b>Id</b>
                <b>Uuid</b>
                <b>Amount</b>
                <b>Currency</b>
                <b>Actions</b>
            </Header>
            {transactions.map(transaction => (
                <TransactionsListItem
                    currencyOptions={currencyOptions}
                    key={transaction.id}
                    removeTransaction={removeTransaction}
                    transaction={transaction}
                    updateTransaction={updateTransaction}
                />
            ))}

        </>
    );
}

export default React.memo<TransactionsListProps>(TransactionsList);
