import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 150ms linear;

  &:hover {
    scale: 1.3;
  }
`;

export const ContactWrapper = styled.div``;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const Text = styled.p`
  display: block;
  font-weight: bold;
  font-size: 16px;
`;

export const Number = styled.p`
  display: block;
  font-size: 14px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px 8px 12px;
  border-bottom: 1px solid #00bcd5;

  &:last-of-type {
    border-bottom: none;
  }
`;
