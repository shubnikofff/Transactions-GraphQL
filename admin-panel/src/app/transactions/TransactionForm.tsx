import React from 'react';
import { Formik, Field, Form, FieldProps } from 'formik';
import styled from 'styled-components';


import { TransactionFormValues } from './types/form';
import { Currency } from './types/transaction';

interface TransactionFormProps {
    currencyList: Currency[],
    initialValues: TransactionFormValues,
    onSubmit: (values: TransactionFormValues) => void,
}

interface InputRadioProps extends FieldProps {
    options: string[]
}

const Row = styled.div`
  display: flex;
  //justify-content: space-between;
  //width: 100%;
`;

const InputError = styled.div`
  color: red;
`;

function InputText({ field, form: { errors, touched } }: FieldProps) {
    const error = errors[field.name];
    const isTouched = touched[field.name];

    return (
        <div>
            <input {...field} />
            {isTouched && error && <InputError>{error}</InputError>}
        </div>
    )
}

function InputRadio({ field, options, form: { errors, touched } }: InputRadioProps) {
    const error = errors[field.name];
    const isTouched = touched[field.name];

    return (
        <div>
            {options.map(option => (
                <span key={option}>
                    <input {...field} type="radio" id={option} value={option} />
                    <label htmlFor={option}>{option}</label>
                </span>
            ))}
            {isTouched && error && <InputError>{error}</InputError>}
        </div>
    )
}

const MONEY_REGEXP = /^[0-9]+([\\.,][0-9]{1,2})?$/;

export function validate({ uuid, amount, currency }: TransactionFormValues) {
    const errors: Partial<TransactionFormValues> = {};

    if (!uuid) {
        errors.uuid = 'Required';
    }

    if (!amount) {
        errors.amount = 'Required';
    } else if (!MONEY_REGEXP.test(amount)) {
        errors.amount = 'Money value expected'
    }

    if (!currency) {
        errors.currency = 'Required';
    }

    return errors;
}


function TransactionForm({ initialValues, onSubmit, currencyList }: TransactionFormProps) {


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
        >
            <Form>
                <Row>
                    <Field
                        name="uuid"
                        component={InputText}
                        placeholder="Uuid"
                    />
                    <Field
                        name="currency"
                        options={currencyList}
                        component={InputRadio}
                    />
                    <Field
                        name="amount"
                        component={InputText}
                        placeholder="Amount"
                    />
                    <button type="submit">Submit</button>
                </Row>
            </Form>
        </Formik>
    );


    // const { handleSubmit, handleChange, handleBlur, values, isSubmitting, isValid } = useFormik<TransactionFormValues>({
    //     initialValues,
    //     onSubmit
    // });
    //
    // return (
    //     <form onSubmit={handleSubmit}>
    //         <tr>
    //             <td>
    //                 <input name="uuid" onChange={handleChange} onBlur={handleBlur} value={values.uuid} />
    //             </td>
    //             <td>
    //                 <input name="currency" onChange={handleChange} onBlur={handleBlur} value={values.currency} />
    //             </td>
    //             <td>
    //                 <input name="amount" onChange={handleChange} onBlur={handleBlur} value={values.amount} />
    //             </td>
    //             <td>
    //                 <button
    //                     type="submit"
    //                     disabled={isSubmitting || !isValid}
    //                 >Submit</button>
    //             </td>
    //         </tr>
    //     </form>
    // )
}

export default React.memo<TransactionFormProps>(TransactionForm);
