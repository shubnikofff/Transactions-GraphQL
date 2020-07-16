import React from 'react';
import { Transaction } from './types/transaction';

interface TransactionsTableProps {
    transactions: Transaction[]
}

function TransactionsTable({ transactions }: TransactionsTableProps) {
    return (
        <p>Transactions table</p>
    );
}

export default TransactionsTable;
