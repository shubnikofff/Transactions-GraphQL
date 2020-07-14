import React from 'react';
import styled from 'styled-components'

import { useTransactions } from './hooks/useTransactions';

import TransactionForm from './TransactionForm';

import { TransactionFormValues } from './types/form';


const TransactionsListRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
`;

const newTransactionInitialValues: TransactionFormValues = {
    uuid: '',
    currency: '',
    amount: '',
};

const TransactionList = () => {
    const { transactions, error, loading, add } = useTransactions();

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
            <TransactionsListRow>
                <div>Id</div>
                <div>Uuid</div>
                <div>Currency</div>
                <div>Amount</div>
                <div>Actions</div>
            </TransactionsListRow>
            <TransactionForm
                initialValues={newTransactionInitialValues}
                onSubmit={add}
                transactionId="#"
            />
            {transactions.map(transaction => (
                <TransactionsListRow key={transaction.id}>
                    <div>{transaction.id}</div>
                    <div>{transaction.uuid}</div>
                    <div>{transaction.currency}</div>
                    <div>{transaction.amount}</div>
                    <div>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </TransactionsListRow>
            ))}

        </>
    );

    // return (
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>Id</th>
    //                 <th>Uuid</th>
    //                 <th>Amount</th>
    //                 <th>Currency</th>
    //                 <th>Actions</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <TransactionForm
    //                 initialValues={newTransactionInitialValues}
    //                 onSubmit={console.log}
    //                 transactionId="#"
    //             />
    //             {transactions.map(transaction => (
    //                 <tr key={transaction.id}>
    //                     <td>{transaction.id}</td>
    //                     <td>{transaction.uuid}</td>
    //                     <td>{transaction.currency}</td>
    //                     <td>{transaction.amount}</td>
    //                     <td>
    //                         <button>Update</button>
    //                         <button>Delete</button>
    //                     </td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // );
};

export default TransactionList;
