import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const URI = `http://${process.env.SERVER_URI || 'localhost:4000'}/`;

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: URI
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link
});

export default client;
