import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import { Transaction } from '../../model';

const queryTransactions = loader('./queryTransactions.graphql');

interface QueryTransactionsResponse {
    transactions: Transaction[]
}

export const useQueryTransactions = () => {
    return useQuery<QueryTransactionsResponse>(queryTransactions);
};
