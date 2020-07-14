import React from 'react';
import styled from 'styled-components';

import { Form, Field, FieldProps } from 'formik';

import { useQueryCurrencyList } from '../hooks/useQueryCurrencyList';

interface InputTextProps extends FieldProps {
    label: string
}

interface InputRadioProps extends FieldProps {
    options: string[]
}

const FormControl = styled.div`
  padding: 1rem 0;
`;

const InputRadioWrapper = styled.span`
  padding-right: 0.5rem;
`;

const InputError = styled.div`
  color: red;
`;

function InputText({ field, label, form: { errors, touched } }: InputTextProps) {
    const error = errors[field.name];
    const isTouched = touched[field.name];

    return (
        <FormControl>
            <div>
                <b><label htmlFor={field.name}>{label}</label></b>
            </div>
            <div>
                <input {...field} id={field.name} />
            </div>
            {isTouched && error && <InputError>{error}</InputError>}
        </FormControl>
    );
}

function InputRadio({ field, options, form: { errors, touched } }: InputRadioProps) {
    const error = errors[field.name];
    const isTouched = touched[field.name];

    return (
        <FormControl>
            {options.map(option => (
                <InputRadioWrapper key={option}>
                    <input {...field} type="radio" id={option} value={option} />
                    <label htmlFor={option}>{option}</label>
                </InputRadioWrapper>
            ))}
            {isTouched && error && <InputError>{error}</InputError>}
        </FormControl>
    );
}

export function TransactionForm() {
    const { currencyList } = useQueryCurrencyList();

    return (
        <Form>
            <Field
                name="uuid"
                component={InputText}
                label="Uuid"
            />
            <Field
                name="currency"
                options={currencyList}
                component={InputRadio}
            />
            <Field
                name="amount"
                component={InputText}
                label="Amount"
            />
            <FormControl>
                <button type="submit">
                    Submit
                </button>
            </FormControl>
        </Form>
    );
}
