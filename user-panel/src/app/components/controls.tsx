import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid black;
  
  &:hover {
    background-color: #f3f3f3;
  }
  
  &:focus, &:active {
    outline: 0;
    box-shadow: none;
  }
  
  &:active {
    transform: translateY(1px);
  }
`

const Select = styled.select`
  padding: 0.4rem 1rem;
  background-color: white;
  border: 1px solid black;
  
  &:focus, &:active {
    outline: 0;
    box-shadow: none;
  }
`;

export {
    Button,
    Select,
}
