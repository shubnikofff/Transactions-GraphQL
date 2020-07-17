import React from 'react';
import { useFilter } from './hooks';
import { FILTER_ALL_VALUE } from './constants';

interface FilterProps {
    search: (filter: string) => void
}

function Filter({ search }: FilterProps) {
    const { loading, error, options, value, setValue } = useFilter();

    if (loading) {
        return (<p>Loading...</p>);
    }

    if (error) {
        return (<p>Error occurred: {error.message}</p>);
    }

    return (
        <div>
            <select
                value={value}
                onChange={(event) => {setValue(event.currentTarget.value)}}
            >
                <option value={FILTER_ALL_VALUE}>ALL</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button onClick={() => {search(value)}}>Search</button>
        </div>
    );
}

export default React.memo<FilterProps>(Filter);
