export enum FieldNames {
    UUID = 'uuid',
    AMOUNT = 'amount',
    CURRENCY = 'currency'
}

export interface TransactionFormValues {
    amount: string;
    currency: string;
    uuid: string;
}
