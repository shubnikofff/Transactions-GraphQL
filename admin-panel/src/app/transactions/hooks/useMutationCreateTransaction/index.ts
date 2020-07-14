import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { TransactionFormValues } from '../../types/form';

const mutationAddTransaction = loader('./mutationAddTransaction.graphql');

export function useMutationAddTransaction() {
    const [addTransaction] = useMutation(mutationAddTransaction);

    const save = (formValues: TransactionFormValues) => {
        return addTransaction({
            variables: {
                transaction: {
                    ...formValues,
                    amount: parseFloat(formValues.amount),
                },
            }
        });
    }

    return { save }
}
