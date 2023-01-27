import { RightNavLink } from './UserMenu.styled';
import { Box } from 'styles/Box';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <Box as="div" display="flex" alignItems="center">
      <p>Welcome, {user.name} 👋😊</p>
      <RightNavLink to="/">Log Out</RightNavLink>
    </Box>
  );
};
