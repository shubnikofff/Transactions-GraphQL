import * as transactionRepository from '../domain/repository'

import { Currency, TransactionInput } from '../domain/model'

interface TransactionsRequest {
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
        transactions: (_: any, { currency }: TransactionsRequest) =>
            currency ? transactionRepository.findByCurrency(currency) : transactionRepository.findAll(),
        transaction: (_: any, { id }: TransactionRequest) => transactionRepository.findOne(id),
        transactionsNumber: transactionRepository.count,
    },

    Mutation: {
        addTransaction: (_: any, { transaction }: AddTransactionRequest) => transactionRepository.insert(transaction),
        updateTransaction: (_: any, { id, transaction }: UpdateTransactionRequest) => transactionRepository.update(id, transaction),
        deleteTransaction: (_: any, { id }: DeleteTransactionRequest) => transactionRepository.remove(id),
    }
};

export default resolvers;
