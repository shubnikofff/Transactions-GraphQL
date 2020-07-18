import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid black;
  
  &:hover {
    background-color: #f3f3f3;
  }
  
  &:focus {
    outline: 0;
    box-shadow: none;
  }
  
  &:active {
    transform: translateY(1px);
  }
`

export default Button;
