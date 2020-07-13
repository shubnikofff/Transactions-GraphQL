import React from 'react';
import { useParams } from 'react-router-dom'

const DeleteTransaction = () => {
    const { id } = useParams();

    return (
        <>
            <h3>Delete Transaction</h3>
            <div>{id}</div>
        </>
    )
};

export default DeleteTransaction;
