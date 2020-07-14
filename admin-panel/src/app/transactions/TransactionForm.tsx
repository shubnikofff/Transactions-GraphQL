import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';


import { TransactionFormValues } from './types/form';

interface TransactionFormProps {
    transactionId: string
    initialValues: TransactionFormValues,
    onSubmit: (values: TransactionFormValues) => void,
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function TransactionForm({ initialValues, onSubmit, transactionId }: TransactionFormProps) {
    const { handleSubmit, handleChange, handleBlur, values } = useFormik<TransactionFormValues>({
        initialValues,
        onSubmit
    });

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <div>
                    {transactionId}
                </div>
                <div>
                    <input name="uuid" onChange={handleChange} onBlur={handleBlur} value={values.uuid} />
                </div>
                <div>
                    <input name="currency" onChange={handleChange} onBlur={handleBlur} value={values.currency} />
                </div>
                <div>
                    <input name="amount" onChange={handleChange} onBlur={handleBlur} value={values.amount} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Row>
        </form>
    )
}

export default React.memo<TransactionFormProps>(TransactionForm);
