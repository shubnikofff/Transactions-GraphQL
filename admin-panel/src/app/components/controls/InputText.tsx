import React from 'react';

import styled from 'styled-components';
import { useField } from 'formik';

import Error from './Error';

interface InputTextProps {
    name: string;
    placeholder: string;
}

const Container = styled.div`
  height: 3rem;
  padding-right: 1rem;

  & > input {
    width: 100%;
    color: black;
    font-size: 1rem;
    padding: 0.4rem;
    border: 1px solid black;
  }
  
  & > input:focus {
    border: 2px solid black;
    box-shadow: none;
    outline: 0;
  }
  
`;

function InputText({ placeholder, name }: InputTextProps) {
    const [field, { error, touched }] = useField(name);

    return (
        <Container>
            <input
                {...field}
                type="text"
                placeholder={placeholder}
            />
            {touched && error && <Error text={error} />}
        </Container>
    );
}

export default InputText;
