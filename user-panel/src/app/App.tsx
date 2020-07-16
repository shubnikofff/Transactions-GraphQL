import React from 'react';
import styled from 'styled-components';

import { TransactionsTable } from './components';

const Container = styled.div`
  padding: 0 1rem;
`;

function App() {
    return (
        <Container>
            <h1>User panel</h1>
            <TransactionsTable transactions={[]} />
        </Container>
    );
}

export default App;
