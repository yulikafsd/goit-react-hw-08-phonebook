import styled from 'styled-components';

export const Text = styled.p`
  display: block;
  text-align: center;
  color: #00bcd5;
  font-style: italic;
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #333;
  transition: all 200ms linear;

  &:hover {
    color: #00bcd5;
  }
`;
