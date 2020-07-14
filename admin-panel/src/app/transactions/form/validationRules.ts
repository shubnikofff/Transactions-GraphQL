import { TransactionFormValues } from '../types/form';

const MONEY_REGEXP = /^[0-9]+([\\.,][0-9]{1,2})?$/;

export function validate({ uuid, amount, currency }: TransactionFormValues) {
    const errors: Partial<TransactionFormValues> = {};

    if (!uuid) {
        errors.uuid = 'Required';
    }

    if (!amount) {
        errors.amount = 'Required';
    } else if (!MONEY_REGEXP.test(amount)) {
        errors.amount = 'Money value expected'
    }

    if (!currency) {
        errors.currency = 'Required';
    }

    return errors;
}
