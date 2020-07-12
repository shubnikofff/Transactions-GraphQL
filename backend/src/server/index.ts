import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './schema';

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
