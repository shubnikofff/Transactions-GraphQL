import React, { useState } from 'react';

import styled from 'styled-components';
import { Form, Formik } from 'formik';

import { Button, InputText, Select } from './controls';
import { validate } from './validationRules';

import { ExecutionResult } from 'graphql';
import { Currency, Transaction } from './types/transaction';
import { TransactionFormValues } from './types/form';

interface TransactionsListItemProps {
    currencyOptions: Currency[];
    removeTransaction: (id: string) => void;
    transaction: Transaction;
    updateTransaction: (id: string, values: TransactionFormValues) => Promise<ExecutionResult<any>>;
}

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr 2fr;
  padding: 1rem 0;
  
  & > * {
    margin-right: 1rem;
  }
  
  button {
    margin-right: 1rem;
  }
`;

function TransactionsListItem({ transaction, currencyOptions, updateTransaction, removeTransaction }: TransactionsListItemProps) {
    const [editMode, setEditMode] = useState(false);
    const { id, uuid, amount, currency } = transaction;

    if (!editMode) {
        return (
            <Row>
                <div>{id}</div>
                <div>{uuid}</div>
                <div>{amount}</div>
                <div>{currency}</div>
                <div>
                    <Button onClick={() => setEditMode(true)}>
                        Update
                    </Button>
                    <Button onClick={() => removeTransaction(id)}>
                        Delete
                    </Button>
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
                    <InputText
                        name="amount"
                        placeholder="Amount"
                    />
                    <Select
                        name="currency"
                        options={currencyOptions}
                    />
                    <div>
                        <Button type="submit">
                            Save
                        </Button>
                        <Button onClick={() => {
                            setEditMode(false)
                        }}>
                            Cancel
                        </Button>
                    </div>
                </Row>
            </Form>
        </Formik>
    );
}

export default React.memo<TransactionsListItemProps>(TransactionsListItem);
