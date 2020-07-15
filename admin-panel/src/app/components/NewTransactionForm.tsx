import React from 'react';

import styled from 'styled-components';
import { Formik, Form, FormikHelpers } from 'formik';

import { InputRadio, InputText } from './form';

import { Currency } from './types/transaction';
import { TransactionFormValues } from './types/form';
import { validate } from './validationRules';

interface NewTransactionFormProps {
    addTransaction: (formValues: TransactionFormValues) => Promise<any>,
    currencyList: Currency[],
}

const Row = styled.div`
  display: flex;
`;

const initialValues: TransactionFormValues = {
    uuid: '',
    currency: '',
    amount: '',
};

function NewTransactionForm({ currencyList, addTransaction }: NewTransactionFormProps) {
    const handleSubmit = (values: TransactionFormValues, { resetForm }: FormikHelpers<TransactionFormValues>) => {
        addTransaction(values).then(resetForm);
    };

    return (
        <>
            <h3>New Transaction</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validate={validate}
            >
                <Form>
                    <Row>
                        <InputText
                            name="uuid"
                            placeholder="Uuid"
                        />
                        <InputRadio
                            name="currency"
                            options={currencyList}
                        />
                        <InputText
                            name="amount"
                            placeholder="Amount"
                        />
                        <div>
                            <button type="submit">Create</button>
                        </div>
                    </Row>
                </Form>
            </Formik>
        </>
    );
}

export default NewTransactionForm;
