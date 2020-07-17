import React from 'react';
import styled from 'styled-components';

import { Filter, TransactionsTable } from './components';
import { useTransactions } from './components/hooks';

const Container = styled.div`
  padding: 0 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 3rem;
`;

function App() {
    const { loading, error, transactions, loadMore, hasMore, search } = useTransactions();

    return (
        <Container>
            <h1>User panel</h1>
            <Filter search={search} />
            <TransactionsTable
                loading={loading}
                error={error}
                transactions={transactions}
            />
            <Footer>
                {hasMore && <button onClick={loadMore}>Load more</button>}
            </Footer>
        </Container>
    );
}

export default App;
