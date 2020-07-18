import { Transaction } from './transaction';

export interface MutationAddTransactionData {
    addTransaction: Transaction;
}

export interface MutationAddTransactionVariables {
    transaction: {
        amount: number;
        currency: string;
        uuid: string;
    }
}

export interface MutationUpdateTransactionData {
    updateTransaction: Transaction;
}

export interface MutationUpdateTransactionVariables {
    id: string;
    transaction: {
        amount: number;
        currency: string;
        uuid: string;
    }
}

export interface MutationDeleteTransactionData {
    deleteTransaction: {
        id: string
    };
}

export interface MutationDeleteTransactionVariables {
    id: string;
}
