import * as repository from './repository'

import { ApolloError } from 'apollo-server';
import { Currency, TransactionInput } from './types/transaction';

export function getTransactions(currency?: Currency, after?: number, offset?: number) {
    const transactions = currency ? repository.findByCurrency(currency) : repository.findAll();

    if (after !== undefined && offset !== undefined) {
        return repository.getPage(transactions, after, offset);
    }

    return transactions;
}

export function hasMore(after: number, offset: number, currency?: Currency) {
    const transactions = currency ? repository.findByCurrency(currency) : repository.findAll();

    return !!transactions[after + offset];
}

export function getTransactionsNumber() {
    return repository.count();
}

export function addTransaction(input: TransactionInput) {
    return repository.insert(input);
}

export function updateTransaction(id: string, input: TransactionInput) {
    const transaction = repository.findOne(id);

    if (!transaction) {
        throw new ApolloError("No such transaction");
    }

    return repository.update(transaction, input);
}

export function deleteTransaction(id: string) {
    const transaction = repository.findOne(id);

    if (!transaction) {
        throw new ApolloError("No such transaction");
    }

    repository.remove(id);

    return transaction;
}
