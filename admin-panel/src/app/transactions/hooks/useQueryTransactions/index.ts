import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import { Transaction } from '../../model';

const queryTransactions = loader('./queryTransactions.graphql');

interface QueryTransactionsResponse {
    transactions: Transaction[]
}

export const useQueryTransactions = () => {
    const { loading, error, data } = useQuery<QueryTransactionsResponse>(queryTransactions);

    const transactions: Transaction[] = data ? data.transactions : [];

    return {
        loading,
        error,
        transactions,
    }
};
