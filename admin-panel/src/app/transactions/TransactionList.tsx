import React from 'react';

import { useQueryTransactions } from './hooks/useQueryTransactions';

const TransactionList = () => {
    const { loading, error, data } = useQueryTransactions();

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

    if (data) {
        return (
            <ul>
                {data.transactions.map(transaction => (
                    <li key={transaction.id}>{transaction.uuid}</li>
                ))}
            </ul>
        )
    }

    return null;
};

export default TransactionList;
