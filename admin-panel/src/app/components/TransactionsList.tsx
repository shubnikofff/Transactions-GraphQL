import React from 'react';
import styled from 'styled-components'

import TransactionsListItem from './TransactionsListItem';

import { Currency, Transaction } from './types/transaction';
import { TransactionFormValues } from './types/form';
import { ExecutionResult } from 'graphql';

interface TransactionsListProps {
    loading: boolean,
    error?: Error,
    currencyList: Currency[]
    transactions: Transaction[]
    removeTransaction: (id: string) => Promise<ExecutionResult<any>>
    updateTransaction: (id: string, values: TransactionFormValues) => Promise<ExecutionResult<any>>
}

const Header = styled.div`
  display: grid;
  padding: 1rem 0 1rem 1rem;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  background-color: #f3f3f3;
`;

function TransactionsList({ loading, error, currencyList, transactions, removeTransaction, updateTransaction }: TransactionsListProps) {
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
                <b>Currency</b>
                <b>Amount</b>
                <b>Actions</b>
            </Header>
            {transactions.map(transaction => (
                <TransactionsListItem
                    currencyList={currencyList}
                    key={transaction.id}
                    removeTransaction={removeTransaction}
                    transaction={transaction}
                    updateTransaction={updateTransaction}
                />
            ))}

        </>
    );
}

export default TransactionsList;
