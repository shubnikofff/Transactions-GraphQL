import React from 'react';
import styled from 'styled-components';

import { Button, Select } from './controls';

import { useFilter } from './hooks';

import { FILTER_ALL_VALUE } from './constants';

interface SearchPanelProps {
    className: string;
    search: (filter: string) => void;
}

const Container = styled.div`
  & > * {
    margin-right: 0.5rem;
  }
`;

function SearchPanel({ search, className }: SearchPanelProps) {
    const {
        error,
        loading,
        options,
        setValue,
        value,
    } = useFilter();

    if (loading) {
        return (<p>Loading...</p>);
    }

    if (error) {
        return (<p>Error occurred: {error.message}</p>);
    }

    return (
        <Container className={className}>
            <label htmlFor="filter">Filter transactions by:</label>
            <Select
                id="filter"
                value={value}
                onChange={(event) => {
                    setValue(event.currentTarget.value);
                }}
            >
                <option value={FILTER_ALL_VALUE}>ALL</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Select>
            <Button onClick={() => {
                search(value);
            }}>
                Search
            </Button>
        </Container>
    );
}

export default React.memo<SearchPanelProps>(SearchPanel);
