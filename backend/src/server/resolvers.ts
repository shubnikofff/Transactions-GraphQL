import * as transactionRepository from '../domain/repository'
import * as transactionService from '../domain/service';

import { Currency, TransactionInput } from '../domain/model'

interface TransactionsRequest {
    currency?: Currency
    after?: number
    offset?: number
}

interface HasMoreRequest {
    after: number
    offset: number
    currency?: Currency
}

interface TransactionRequest {
    id: string
}

interface AddTransactionRequest {
    transaction: TransactionInput
}

interface UpdateTransactionRequest {
    id: string,
    transaction: TransactionInput,
}

interface DeleteTransactionRequest {
    id: string
}

const resolvers = {
    Query: {
        transactions: (_: any, { currency, after, offset }: TransactionsRequest) =>
            transactionService.getTransactions(currency, after, offset),
        transaction: (_: any, { id }: TransactionRequest) => transactionRepository.findOne(id),
        transactionsNumber: transactionRepository.count,
        hasMore: (_: any, { after, offset, currency }: HasMoreRequest) =>
            transactionService.hasMore(after, offset, currency),
    },

    Mutation: {
        addTransaction: (_: any, { transaction }: AddTransactionRequest) => transactionRepository.insert(transaction),
        updateTransaction: (_: any, { id, transaction }: UpdateTransactionRequest) => transactionRepository.update(id, transaction),
        deleteTransaction: (_: any, { id }: DeleteTransactionRequest) => transactionRepository.remove(id),
    }
};

export default resolvers;
