import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';

export const Header = styled.h2`
  text-align: center;
`;

export const StyledForm = styled(Form)``;

export const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1;
`;

export const StyledField = styled(Field)`
  display: block;
  padding-left: 10px;
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

export const StyledError = styled(ErrorMessage)`
  width: 300px;
  font-size: 10px;
  font-style: italic;
  text-align: left;
  line-height: 1;
  color: red;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  outline: none;
  margin: 20px auto;
  padding: 10px 20px;
  min-width: 130px;
  border: 2px solid #00bcd5;
  border-radius: 25px;
  color: #fff;
  background-color: #00bcd5;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #00a6bc;
    border-color: #00a6bc;
  }

  &:last-of-type {
    color: #00bcd5;
    background-color: transparent;
    border-color: #00bcd5;
    transition: all 250ms ease-in-out;

    &:hover,
    &:focus {
      border-color: #00a6bc;
      color: #00a6bc;
    }
  }
`;
