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
        amount: Float!
        currency: Currency!
    }
    
    type Query {
        transactions: [Transaction]!
        transactionsOfCurrency(currency: Currency): [Transaction]!
        transactionsNumber: Int!
    }
    
    type Mutation {
        addTransaction(transaction: TransactionInput!): Transaction!
        updateTransaction(id: ID!, transaction: TransactionInput!): Transaction!
        deleteTransaction(id: ID!): Transaction!
    }
`;

export default schema;
