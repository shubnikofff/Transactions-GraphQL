import React from 'react';

import styled from 'styled-components';
import { useField } from 'formik';

import InputError from './InputError';

interface InputSelectProps {
    name: string,
    options: string[]
}

const InputWrapper = styled.div`
  padding-right: 1rem;
`;

const Select = styled.select`
  width: 100%;
`;

function InputSelect({ name, options }: InputSelectProps) {
    const [field, { error, touched }] = useField(name);

    return (
        <InputWrapper>
            <Select {...field}>
                {options.map(option => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </Select>
            {touched && error && <InputError message={error} />}
        </InputWrapper>
    );
}

export default InputSelect;
