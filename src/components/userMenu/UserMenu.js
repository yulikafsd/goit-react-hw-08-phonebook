import { Text, Button } from './UserMenu.styled';
import { Box } from 'styles/Box';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { IoLogOutOutline } from 'react-icons/io5';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Box as="div" display="flex" alignItems="center">
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={handleLogOut}>
        <IoLogOutOutline />
      </Button>
    </Box>
  );
};
