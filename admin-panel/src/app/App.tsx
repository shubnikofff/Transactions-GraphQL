import React from 'react';

import styled from 'styled-components';

import { NewTransactionForm, TransactionsList } from './components';

import { useTransactions } from './components/hooks';

const Container = styled.div`
  padding: 0 1rem;
`;

const Section = styled.div`
  padding-bottom: 2rem;
`;

function App() {
    const { currencyOptions, transactions, error, loading, add, update, remove } = useTransactions();

    return (
        <Container>
            <h1>Admin panel</h1>

            <Section>
                <NewTransactionForm
                    addTransaction={add}
                    currencyOptions={currencyOptions}
                />
            </Section>

            <Section>
                <TransactionsList
                    loading={loading}
                    error={error}
                    currencyOptions={currencyOptions}
                    transactions={transactions}
                    removeTransaction={remove}
                    updateTransaction={update}
                />
            </Section>

        </Container>
    )
}

export default App;
