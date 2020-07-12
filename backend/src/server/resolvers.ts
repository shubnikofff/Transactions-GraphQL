import * as transactionRepository from '../domain/repository'

import { Currency, TransactionInput } from '../domain/model'

interface TransactionsOfCurrencyRequest {
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
        transactionsOfCurrency: (_: any, { currency }: TransactionsOfCurrencyRequest) => transactionRepository.findByCurrency(currency),
        transactionsNumber: transactionRepository.count,
    },

    Mutation: {
        addTransaction: (_: any, { transaction }: AddTransactionRequest) => transactionRepository.insert(transaction),
        updateTransaction: (_: any, { id, transaction }: UpdateTransactionRequest) => transactionRepository.update(id, transaction),
        deleteTransaction: (_: any, { id }: DeleteTransactionRequest) => transactionRepository.remove(id),
    }

};

export default resolvers;
