import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { useState } from 'react';
import { FILTER_ALL_VALUE } from '../constants';

const queryCurrency = loader('./gql/queryCurrency.graphql');

interface QueryCurrencyData {
    enumCurrency: {
        enumValues: { name: string }[]
    }
}

function useFilter() {
    const [value, setValue] = useState<string>(FILTER_ALL_VALUE);
    const { loading, error, data } = useQuery<QueryCurrencyData>(queryCurrency);

    const options = data ? data?.enumCurrency.enumValues.map(value => value.name) : [];

    return {
        loading,
        error,
        options,
        value,
        setValue,
    }
}

export default useFilter;
