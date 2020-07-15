import React from 'react';
import { Switch, Route } from 'react-router-dom'

import {
    CreateTransaction,
    DeleteTransaction,
    TransactionsList,
    UpdateTransaction,
} from './transactions';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 1rem;
`;

const App = () => {
    return (
        <Container>
            <h1>Admin panel</h1>

            <Switch>

                <Route exact path="/">
                    <TransactionsList />
                </Route>

                <Route exact path="/create">
                    <CreateTransaction />
                </Route>

                <Route exact path="/update/:id">
                    <UpdateTransaction />
                </Route>

                <Route exact path="/delete/:id">
                    <DeleteTransaction />
                </Route>

            </Switch>

        </Container>
    )
}

export default App;
