import React from 'react';
import styled from 'styled-components';

import { useTransactions } from './components/hooks';

import { Button } from './components/controls';
import { SearchPanel, TransactionsTable } from './components';

const Container = styled.div`
  margin: 0 3rem;

  & > .load-more {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const Section = styled.section`
  padding: 1rem 0;
`;

function App() {
    const {
        error,
        hasMore,
        loading,
        loadMore,
        search,
        transactions,
        transactionsNumber,
    } = useTransactions();

    return (
        <Container>

            <h1>User panel</h1>

            <Section>
                <SearchPanel
                    className="search-panel"
                    search={search}
                />
            </Section>

            {transactionsNumber && <Section>Number of all transactions: <b>{transactionsNumber}</b></Section>}

            <Section>
                <TransactionsTable
                    error={error}
                    loading={loading}
                    transactions={transactions}
                />
            </Section>


            {hasMore && <Section className="load-more">
				<Button onClick={loadMore}>Load more</Button>
			</Section>}


        </Container>
    );
}

export default App;
