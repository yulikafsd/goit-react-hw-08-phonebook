import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 16px 0;
  background-color: #fff;
`;

export const Menu = styled.nav`
  display: flex;
  padding: 0 32px;
  width: 100vw;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  padding: 0 12px;
  font-size: 20px;
  color: #333333;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-radius: 25px;
  transition: all 200ms linear;

  &:hover:not(.active) {
    color: #00bcd5;
    border-color: #00bcd5;
  }

  &.active {
    color: #00bcd5;
    border-color: #00bcd5;
  }
`;

export const Line = styled.div`
  height: 2px;
  background: radial-gradient(
    circle,
    rgba(0, 188, 213, 1) 0%,
    rgba(0, 188, 213, 0.3) 100%
  );
`;
