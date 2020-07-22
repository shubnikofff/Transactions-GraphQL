import React from 'react';
import styled from 'styled-components';

interface ErrorProps {
    text: string;
}

const Container = styled.div`
  color: red;
  font-size: small;
`;

function Error({ text }: ErrorProps) {
    return (
        <Container>
            {text}
        </Container>
    );
}

export default Error;
