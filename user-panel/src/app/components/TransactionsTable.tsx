import React from 'react';
import styled from 'styled-components';

import { Transaction } from './types/transaction';

interface TransactionsTableProps {
    loading: boolean;
    error?: Error;
    transactions: Transaction[];
}

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  padding: 1rem 0;
`;

const HeaderRow = styled(Row)`
  border-bottom: 1px solid lightgrey;
`;

function TransactionsTable({ loading, error, transactions }: TransactionsTableProps) {
    if (loading) {
        return (<p>Loading...</p>);
    }

    if (error) {
        return (<p>Error occurred: {error.message}</p>);
    }

    if (!transactions.length) {
        return null;
    }

    return (
        <>
            <HeaderRow>
                <b>Id</b>
                <b>Uuid</b>
                <b>Amount</b>
                <b>Currency</b>
            </HeaderRow>
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

export default React.memo<TransactionsTableProps>(TransactionsTable);
