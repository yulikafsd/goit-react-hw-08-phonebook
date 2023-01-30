import { useAuth } from 'hooks/useAuth';
import { Box } from 'styles/Box';
import { LeftNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="div" display="flex">
      <LeftNavLink to="/">Home</LeftNavLink>
      {isLoggedIn && <LeftNavLink to="/contacts">Contacts</LeftNavLink>}
    </Box>
  );
};
