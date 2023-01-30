import styled from 'styled-components';

export const Header = styled.h2`
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1;
`;

export const Input = styled.input`
  display: block;
  padding-left: 10px;
  margin-bottom: 32px;
  width: 300px;
  line-height: 2.3;
  border-radius: 5px;
  border: 1px solid #333;

  &:hover,
  &:focus {
    border-color: #00a6bc;
    outline: none;
  }
`;
