import * as transactionRepository from '../domain/repository'

import { Currency, TransactionInput } from '../domain/model'

interface TransactionRequest {
    id: string
}

interface TransactionsByCurrencyRequest {
    currency: Currency
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
        transactions: transactionRepository.findAll,
        transaction: (_: any, { id }: TransactionRequest) => transactionRepository.findOne(id),
        transactionsByCurrency: (_: any, { currency }: TransactionsByCurrencyRequest) => transactionRepository.findByCurrency(currency),
        transactionsNumber: transactionRepository.count,
    },

    Mutation: {
        addTransaction: (_: any, { transaction }: AddTransactionRequest) => transactionRepository.insert(transaction),
        updateTransaction: (_: any, { id, transaction }: UpdateTransactionRequest) => transactionRepository.update(id, transaction),
        deleteTransaction: (_: any, { id }: DeleteTransactionRequest) => transactionRepository.remove(id),
    }
};

export default resolvers;
