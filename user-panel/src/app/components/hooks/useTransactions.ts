import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { Transaction } from '../types/transaction';
import { FILTER_ALL_VALUE } from '../constants';

const queryTransactions = loader('./gql/queryTransactions.graphql');
const OFFSET = 10;

interface QueryTransactionsData {
    transactions: Transaction[]
    hasMore: boolean
}

interface QueryTransactionsVariables {
    currency: string | null
    after: number
    offset: number
}

function useTransactions() {
    const [fetchTransactions, { loading, error, data, fetchMore }] = useLazyQuery<QueryTransactionsData, QueryTransactionsVariables>(queryTransactions);

    const transactions: Transaction[] = data ? data.transactions : [];
    const hasMore = data && data.hasMore;

    const loadMore = () => fetchMore({
        variables: {
            // currency: filter,
            after: transactions.length,
            offset: OFFSET,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
                return prev;
            }

            return {
                hasMore: fetchMoreResult.hasMore,
                transactions: [
                    ...transactions,
                    ...fetchMoreResult.transactions,
                ],
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
        loading,
        error,
        transactions,
        search,
        hasMore,
        loadMore,
    }
}

export default useTransactions;
