import React from 'react';

import styled from 'styled-components';
import { useField } from 'formik';

import InputError from './InputError';

interface InputTextProps {
    name: string
    placeholder: string
}

const InputWrapper = styled.div`
  padding-right: 1rem;
`;

const Input = styled.input`
  width: 100%;
`;

function InputText({ placeholder, name }: InputTextProps) {
    const [field, { error, touched }] = useField(name);

    return (
        <InputWrapper>
            <Input {...field} type="text" placeholder={placeholder} />
            {touched && error && <InputError message={error} />}
        </InputWrapper>
    );
}

export default InputText;
