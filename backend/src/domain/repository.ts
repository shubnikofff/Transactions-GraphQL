import db from '../db';

import { Currency, Transaction, TransactionInput } from "./types/transaction";

let nextId = db.size + 1;

function getNextId(): string {
    return (nextId++).toString(10);
}

export function findAll() {
    return Array.from(db.values());
}

export function findOne(id: string) {
    return db.get(id);
}

export function findByCurrency(currency: Currency) {
    return Array.from(db.values()).filter(value => value.currency === currency);
}

export function count() {
    return db.size;
}

export function insert({ amount, currency, uuid }: TransactionInput) {
    const newTransaction: Transaction = {
        id: getNextId(),
        uuid,
        currency,
        amount
    };

    db.set(newTransaction.id, newTransaction);

    return newTransaction;
}

export function update(transaction: Transaction, input: TransactionInput) {
    const updatedTransaction = {
        ...transaction,
        ...input,
    };

    db.set(transaction.id, updatedTransaction);

    return updatedTransaction;
}

export function remove(id: string) {
    db.delete(id);
}

export function getPage(transactions: Transaction[], from: number, limit: number) {
    return transactions.slice(from, from + limit);
}
