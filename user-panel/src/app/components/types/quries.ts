import { Transaction } from './transaction';

export interface QueryCurrencyData {
    enumCurrency: {
        enumValues: { name: string }[];
    }
}

export interface QueryTransactionsData {
    transactions: Transaction[];
    transactionsNumber: number;
    hasMore: boolean;
}

export interface QueryTransactionsVariables {
    currency: string | null;
    after: number;
    offset: number;
}
