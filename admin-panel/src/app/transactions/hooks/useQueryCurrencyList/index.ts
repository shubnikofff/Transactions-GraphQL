import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { Currency } from '../../types/transaction';

const queryCurrencyList = loader('./queryCurrencyList.graphql');

interface CurrencyValue {
    name: Currency
}

interface QueryCurrencyListResponse {
    __type: {
        name: string,
        enumValues: CurrencyValue[]
    }
}

export function useQueryCurrencyList() {
    const { data } = useQuery<QueryCurrencyListResponse>(queryCurrencyList);

    const currencyList: Currency[] = data ? data.__type.enumValues.map(currency => currency.name) : [];

    return { currencyList };
}
