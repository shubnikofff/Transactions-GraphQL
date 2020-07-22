import React from 'react';

import styled from 'styled-components';

import { NewTransactionForm, TransactionsList } from './components';

import { useTransactions } from './components/hooks';

const Container = styled.div`
  padding: 0 3rem;
`;

const Section = styled.section`
  padding: 1rem 0;
`;

function App() {
    const {
        add,
        currencyOptions,
        error,
        loading,
        remove,
        transactions,
        update,
    } = useTransactions();

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
    );
}

export default App;
