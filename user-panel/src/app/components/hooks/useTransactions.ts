import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import { Transaction } from '../types/transaction';

import { FILTER_ALL_VALUE } from '../constants';

const queryTransactions = loader('./gql/queryTransactions.graphql');
const OFFSET = 10;

interface QueryTransactionsData {
    transactions: Transaction[];
    transactionsNumber: number;
    hasMore: boolean;
}

interface QueryTransactionsVariables {
    currency: string | null;
    after: number;
    offset: number;
}

function useTransactions() {
    const [fetchTransactions, { loading, error, data, fetchMore }] = useLazyQuery<QueryTransactionsData, QueryTransactionsVariables>(queryTransactions);

    const transactions: Transaction[] = data ? data.transactions : [];
    const transactionsNumber = data?.transactionsNumber;
    const hasMore = data?.hasMore;

    const loadMore = () => fetchMore({
        variables: {
            after: transactions.length,
            offset: OFFSET,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
                return prev;
            }

            return {
                transactions: [
                    ...transactions,
                    ...fetchMoreResult.transactions,
                ],
                transactionsNumber: fetchMoreResult.transactionsNumber,
                hasMore: fetchMoreResult.hasMore,
            }
        },
    });

    const search = (filter: string) => {
        fetchTransactions({
            variables: {
                currency: filter === FILTER_ALL_VALUE ? null : filter,
                after: 0,
                offset: OFFSET
            }
        });
    }

    return {
        error,
        hasMore,
        loading,
        loadMore,
        search,
        transactions,
        transactionsNumber,
    }
}

export default useTransactions;
