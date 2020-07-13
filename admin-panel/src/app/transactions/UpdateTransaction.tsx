import React from 'react';
import { useParams } from 'react-router-dom'

const UpdateTransaction = () => {
    const { id } = useParams();

    return (
        <>
            <h3>Update Transaction</h3>
            <div>{id}</div>
        </>
    )
};

export default UpdateTransaction;
