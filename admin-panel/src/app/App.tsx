import React from 'react';

import styled from 'styled-components';

import { NewTransactionForm, TransactionsList } from './components';

import { useTransactions, useCurrencyList } from './components/hooks';

const Container = styled.div`
  padding: 0 1rem;
`;

function App() {
    const { transactions, error, loading, add, update, remove } = useTransactions();
    const { currencyList } = useCurrencyList();

    return (
        <Container>
            <h1>Admin panel</h1>

            <NewTransactionForm
                addTransaction={add}
                currencyList={currencyList}
            />

            <TransactionsList
                loading={loading}
                error={error}
                currencyList={currencyList}
                transactions={transactions}
                removeTransaction={remove}
                updateTransaction={update}
            />

        </Container>
    )
}

export default App;
