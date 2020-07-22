import * as transactionService from '../domain/service';
import * as RequestType from '../domain/types/request';

const resolvers = {
    Query: {
        transactions: (_: any, { currency, after, offset }: RequestType.TransactionsRequest) =>
            transactionService.getTransactions(currency, after, offset),
        transactionsNumber: transactionService.getTransactionsNumber,
        hasMore: (_: any, { after, offset, currency }: RequestType.HasMoreRequest) =>
            transactionService.hasMore(after, offset, currency),
    },

    Mutation: {
        addTransaction: (_: any, { transaction }: RequestType.AddTransactionRequest) =>
            transactionService.addTransaction(transaction),
        updateTransaction: (_: any, { id, transaction }: RequestType.UpdateTransactionRequest) =>
            transactionService.updateTransaction(id, transaction),
        deleteTransaction: (_: any, { id }: RequestType.DeleteTransactionRequest) =>
            transactionService.deleteTransaction(id),
    }
};

export default resolvers;
