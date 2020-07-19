import { gql } from 'apollo-server';

const schema = gql`
    enum Currency {
        EUR
        USD
        BTC
    }

    type Transaction {
        id: ID!
        uuid: String!
        amount: Float!
        currency: Currency!
    }

    input TransactionInput {
        uuid: String!
        currency: Currency!
        amount: Float!
    }

    type Query {
        transactions(currency: Currency, after: Int, offset: Int): [Transaction]!
        transactionsNumber: Int!
        hasMore(after: Int!, offset: Int!, currency: Currency): Boolean!
    }

    type Mutation {
        addTransaction(transaction: TransactionInput!): Transaction!
        updateTransaction(id: ID!, transaction: TransactionInput!): Transaction!
        deleteTransaction(id: ID!): Transaction!
    }
`;

export default schema;
