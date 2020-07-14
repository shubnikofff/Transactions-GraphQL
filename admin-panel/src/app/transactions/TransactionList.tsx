import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { useQueryTransactions } from './hooks/useQueryTransactions';

const TransactionRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid lightgrey;
`;

const TransactionList = () => {
    const { loading, error, transactions } = useQueryTransactions();

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
        <div>
            <Link to="/create">Create</Link>
            {transactions.map(transaction => (
                <TransactionRow key={transaction.id}>
                    <div>
                        {`#${transaction.id} ${transaction.uuid} `}
                        <b>{`${transaction.amount} ${transaction.currency}`}</b>
                    </div>
                    <div>
                        <Link to={`/update/${transaction.id}`}>Edit</Link>
                        <Link to={`/delete/${transaction.id}`}>Delete</Link>
                    </div>
                </TransactionRow>
            ))}
        </div>
    )
};

export default TransactionList;
