import { v4 as uuidv4 } from 'uuid';

import { Currency, Transaction } from '../domain/model';

const initialData: Transaction[] = [
    {
        id: '1',
        uuid: uuidv4(),
        amount: 2.5,
        currency: Currency.EUR
    },
    {
        id: '2',
        uuid: uuidv4(),
        amount: 13.6,
        currency: Currency.USD
    },
    {
        id: '3',
        uuid: uuidv4(),
        amount: 0.01,
        currency: Currency.BTC
    }
];

export default initialData;
