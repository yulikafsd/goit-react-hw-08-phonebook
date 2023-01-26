import { RightNavLink } from './UserMenu.styled';
import { Box } from 'styles/Box';

export const UserMenu = () => {
  return (
    <Box as="div" display="flex" alignItems="center">
      <p>Hello, User! 👋😊</p>
      <RightNavLink to="/">Log Out</RightNavLink>
    </Box>
  );
};
