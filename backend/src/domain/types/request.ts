import { Currency, TransactionInput } from './transaction';

export interface TransactionsRequest {
    currency?: Currency;
    after?: number;
    offset?: number;
}

export interface HasMoreRequest {
    after: number;
    offset: number;
    currency?: Currency;
}

export interface AddTransactionRequest {
    transaction: TransactionInput;
}

export interface UpdateTransactionRequest {
    id: string;
    transaction: TransactionInput;
}

export interface DeleteTransactionRequest {
    id: string;
}
