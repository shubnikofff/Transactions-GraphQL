import React from 'react';

import styled from 'styled-components';
import { useField } from 'formik';

import Error from './Error';

interface InputSelectProps {
    name: string;
    options: string[];
}

const Container = styled.div`
  height: 3rem;
  padding-right: 1rem;
  
  & > select {
    width: 100%;
    padding: 0.4rem;
    font-size: 1rem;
    background-color: white;
    border: 1px solid black;
    }
  
  & > select:focus {
    outline: 0;
    box-shadow: none;
  }
`;

function Select({ name, options }: InputSelectProps) {
    const [field, { error, touched }] = useField(name);

    return (
        <Container>
            <select {...field}>
                {options.map(option => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
            {touched && error && <Error text={error} />}
        </Container>
    );
}

export default Select;
