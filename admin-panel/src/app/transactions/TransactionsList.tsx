import React from 'react';
import styled from 'styled-components'

import TransactionsListItem from './TransactionsListItem';

import { useTransactions } from './hooks/useTransactions';
import { useQueryCurrencyList } from './hooks/useQueryCurrencyList';
import NewTransactionForm from './NewTransactionForm';


const Grid = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
`;

const TransactionsList = () => {
    const { transactions, error, loading, add, update, remove } = useTransactions();
    const { currencyList } = useQueryCurrencyList();

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
            <NewTransactionForm
                addTransaction={add}
                currencyList={currencyList}
            />
            <Grid>
                <b>Id</b>
                <b>Uuid</b>
                <b>Currency</b>
                <b>Amount</b>
                <b>Actions</b>
            </Grid>
            {transactions.map(transaction => (
                <TransactionsListItem
                    currencyList={currencyList}
                    key={transaction.id}
                    remove={remove}
                    transaction={transaction}
                    update={update}
                />
            ))}

        </>
    );
};

export default TransactionsList;
