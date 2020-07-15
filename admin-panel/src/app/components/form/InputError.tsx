import React from 'react';
import styled from 'styled-components';

interface InputErrorProps {
    message: string
}

const Container = styled.div`
  color: red;
  font-size: small;
`;

function InputError({ message }: InputErrorProps) {
    return (
        <Container>
            {message}
        </Container>
    );
}

export default InputError;
