import ApolloClient from 'apollo-boost';

const uri = 'http://localhost:4000';

const client = new ApolloClient({ uri });

export default client;
