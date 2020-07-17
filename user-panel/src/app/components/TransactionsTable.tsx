import React from 'react';
import { Transaction } from './types/transaction';
import styled from 'styled-components';

interface TransactionsTableProps {
    loading: boolean,
    error?: Error,
    transactions: Transaction[]
}

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  padding: 1rem 0;
`;

function TransactionsTable({ loading, error, transactions }: TransactionsTableProps) {
    if (loading) {
        return (<p>Loading...</p>);
    }

    if (error) {
        return (<p>Error occurred: {error.message}</p>);
    }

    return (
        <>
            <Row>
                <b>Id</b>
                <b>Uuid</b>
                <b>Amount</b>
                <b>Currency</b>
            </Row>
            {transactions.map(({ id, uuid, amount, currency }) => (
                <Row key={id}>
                    <div>{id}</div>
                    <div>{uuid}</div>
                    <div>{amount}</div>
                    <div>{currency}</div>
                </Row>
            ))}
        </>
    );
}

export default TransactionsTable;
