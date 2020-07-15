import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import InputError from './InputError';

interface InputRadioProps {
    name: string,
    options: string[]
}

const FieldWrapper = styled.div`
  padding-right: 1rem;
`;

const InputRadioWrapper = styled.span`
  padding-right: 0.5rem;
`;

function InputRadio({ name, options }: InputRadioProps) {
    const [field, { error, touched }] = useField(name);

    return (
        <FieldWrapper>
            {options.map(option => (
                <InputRadioWrapper key={option}>
                    <input {...field} type="radio" id={option} value={option} />
                    <label htmlFor={option}>{option}</label>
                </InputRadioWrapper>
            ))}
            {touched && error && <InputError message={error} />}
        </FieldWrapper>
    );
}

export default InputRadio;
