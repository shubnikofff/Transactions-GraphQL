import * as repository from './repository'

import { Currency } from './model';

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
