import React from 'react';
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';

import { TransactionFormValues } from './types/form';

import { TransactionForm, validate } from './form';
import { useMutationAddTransaction } from './hooks/useMutationCreateTransaction';

const initialValues: TransactionFormValues = {
    uuid: '',
    amount: '',
    currency: '',
}

function CreateTransaction() {
    const { save } = useMutationAddTransaction();
    const history = useHistory();

    const onSubmit = (formValues: TransactionFormValues) => save(formValues)
        .then(() => {
            history.push("/")
        });

    return (
        <>
            <Link to="/">Back to list</Link>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
            >
                <TransactionForm />
            </Formik>
        </>
    );
}

export default CreateTransaction;
