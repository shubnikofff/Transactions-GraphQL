import { Currency, Transaction } from './transaction';

export interface QueryTransactionsData {
    transactions: Transaction[];
    enumCurrency: {
        enumValues: { name: Currency }[];
    };
}
