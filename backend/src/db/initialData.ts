import faker from 'faker';

import { Currency, Transaction } from '../domain/model';

const initialData: Transaction[] = Array.from({ length: 42 }, (_, index: number): Transaction => ({
    id: (index + 1).toString(),
    uuid: faker.random.uuid(),
    amount: Math.round(faker.random.number({min: 1, max: 300, precision: 0.01}) * 100) / 100,
    currency: faker.random.arrayElement([Currency.EUR, Currency.USD, Currency.BTC])
}));

export default initialData;
