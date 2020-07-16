export enum Currency {
    EUR = 'EUR',
    USD = 'USD',
    BTC = 'BTC'
}

export interface Transaction {
    id: string,
    uuid: string,
    amount: number,
    currency: Currency
}
