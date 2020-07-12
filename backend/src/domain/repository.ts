import { v4 as uuidv4 } from 'uuid';

import db from '../db';

import { Currency, Transaction, TransactionInput } from "./model";

let nextId = db.size + 1;

function getNextId(): string {
    return (nextId++).toString(10);
}

export function findAll() {
    return db.values();
}

export function findByCurrency(currency: Currency) {
    return Array.from(db.values()).filter(value => value.currency === currency);
}

export function count() {
    return db.size;
}

export function insert({ amount, currency }: TransactionInput) {
    const newTransaction: Transaction = {
        id: getNextId(),
        uuid: uuidv4(),
        currency,
        amount
    };

    db.set(newTransaction.id, newTransaction);

    return newTransaction;
}

export function update(id: string, transactionInput: TransactionInput) {
    const transaction = db.get(id);

    if(!transaction) {
        throw new Error(`No such transaction with id = '${id}'`);
    }

    const updatedTransaction = {
        ...transaction,
        ...transactionInput,
    };

    db.set(id, updatedTransaction);

    return updatedTransaction;
}

export function remove(id: string) {
    const transaction = db.get(id);

    if(!transaction) {
        throw new Error(`No such transaction with id = '${id}'`);
    }

    db.delete(id);

    return transaction;
}
