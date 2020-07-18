import React from 'react';
import styled from 'styled-components';

import { useField } from 'formik';

import Error from './Error';

interface RadioGroupProps {
    name: string;
    options: string[];
}

const Container = styled.div`
  height: 3rem;

  & > span {
    padding-right: 0.5rem;
  }
`;

function RadioGroup({ name, options }: RadioGroupProps) {
    const [field, { error, touched }] = useField(name);

    return (
        <Container>
            {options.map(option => (
                <span key={option}>
                    <input
                        {...field}
                        id={`radio-${option}`}
                        type="radio"
                        value={option}
                    />
                    <label htmlFor={`radio-${option}`}>
                        {option}
                    </label>
                </span>
            ))}
            {touched && error && <Error text={error} />}
        </Container>
    );
}

export default RadioGroup;
