import React from 'react';

import styled from 'styled-components';
import { Formik, Form, FormikHelpers } from 'formik';

import { RadioGroup, InputText, Button } from './controls';

import { Currency } from './types/transaction';
import { FieldNames, TransactionFormValues } from './types/form';
import { validate } from './validationRules';

interface NewTransactionFormProps {
    addTransaction: (formValues: TransactionFormValues) => Promise<any>,
    currencyOptions: Currency[],
}

const Row = styled.div`
  display: flex;
  align-items: baseline;
  
  & > * {
    margin-right: 1rem;
  }
`;

const initialValues: TransactionFormValues = {
    uuid: '',
    currency: '',
    amount: '',
};

function NewTransactionForm({ currencyOptions, addTransaction }: NewTransactionFormProps) {
    const handleSubmit = (values: TransactionFormValues, { resetForm }: FormikHelpers<TransactionFormValues>) => {
        addTransaction(values).then(resetForm);
    };

    return (
        <>
            <h4>New Transaction</h4>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validate={validate}
            >
                <Form>
                    <Row>
                        <InputText
                            name={FieldNames.UUID}
                            placeholder="Uuid"
                        />
                        <InputText
                            name={FieldNames.AMOUNT}
                            placeholder="Amount"
                        />
                        <RadioGroup
                            name={FieldNames.CURRENCY}
                            options={currencyOptions}
                        />
                        <div>
                            <Button type="submit">Create</Button>
                        </div>
                    </Row>
                </Form>
            </Formik>
        </>
    );
}

export default React.memo<NewTransactionFormProps>(NewTransactionForm);
