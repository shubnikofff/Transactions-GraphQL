import React, { useState } from 'react';

import styled from 'styled-components';
import { Form, Formik } from 'formik';

import { InputText, InputSelect } from './controls';
import { validate } from './validationRules';

import { ExecutionResult } from 'graphql';
import { Currency, Transaction } from './types/transaction';
import { TransactionFormValues } from './types/form';

interface TransactionsListItemProps {
    transaction: Transaction,
    updateTransaction: (id: string, values: TransactionFormValues) => Promise<ExecutionResult<any>>,
    removeTransaction: (id: string) => void,
    currencyOptions: Currency[],
}

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  padding: 1rem 0 1rem 1rem;
`;

function TransactionsListItem({ transaction, currencyOptions, updateTransaction, removeTransaction }: TransactionsListItemProps) {
    const [editMode, setEditMode] = useState(false);
    const { id, uuid, amount, currency } = transaction;

    if (!editMode) {
        return (
            <Row>
                <div>{id}</div>
                <div>{uuid}</div>
                <div>{currency}</div>
                <div>{amount}</div>
                <div>
                    <button onClick={() => setEditMode(true)}>
                        Update
                    </button>
                    <button onClick={() => removeTransaction(id)}>
                        Delete
                    </button>
                </div>
            </Row>
        );
    }

    return (
        <Formik
            initialValues={{
                uuid,
                amount: typeof amount.toString === 'function' ? amount.toString() : '',
                currency
            }}
            onSubmit={(values: TransactionFormValues) => {
                updateTransaction(id, values).then(() => setEditMode(false));
            }}
            validate={validate}
        >
            <Form>
                <Row>
                    <div>{transaction.id}</div>
                    <InputText
                        name="uuid"
                        placeholder="Uuid"
                    />
                    <InputSelect
                        name="currency"
                        options={currencyOptions}
                    />
                    <InputText
                        name="amount"
                        placeholder="Amount"
                    />
                    <div>
                        <button type="submit">Save</button>
                        <button onClick={() => {
                            setEditMode(false)
                        }}>
                            Cancel
                        </button>
                    </div>
                </Row>
            </Form>
        </Formik>
    );
}

export default TransactionsListItem;
