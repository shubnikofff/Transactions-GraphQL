import styled from 'styled-components';

const Select = styled.select`
  padding: 0.4rem 1rem;
  background-color: white;
  border: 1px solid black;
  
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

export default Select;
