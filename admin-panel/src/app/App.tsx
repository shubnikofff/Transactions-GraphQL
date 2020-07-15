import React from 'react';

import styled from 'styled-components';

import { NewTransactionForm, TransactionsList } from './components';

import { useTransactions, useCurrencyList } from './components/hooks';

const Container = styled.div`
  padding: 0 1rem;
`;

const Section = styled.div`
  padding: 1rem 0;
`;

function App() {
    const { transactions, error, loading, add, update, remove } = useTransactions();
    const { currencyList } = useCurrencyList();

    return (
        <Container>
            <h1>Admin panel</h1>

            <Section>
                <NewTransactionForm
                    addTransaction={add}
                    currencyList={currencyList}
                />
            </Section>

            <Section>
                <TransactionsList
                    loading={loading}
                    error={error}
                    currencyList={currencyList}
                    transactions={transactions}
                    removeTransaction={remove}
                    updateTransaction={update}
                />
            </Section>

        </Container>
    )
}

export default App;
