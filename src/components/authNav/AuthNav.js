import { RightNavLink } from './AuthNav.styled';
import { Box } from 'styles/Box';

export const AuthNav = () => {
  return (
    <Box as="div" display="flex">
      <RightNavLink to="/login">Log In</RightNavLink>
      <RightNavLink to="/register">Register</RightNavLink>
    </Box>
  );
};
