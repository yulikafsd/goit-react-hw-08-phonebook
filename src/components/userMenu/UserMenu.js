import { Text, Button } from './UserMenu.styled';
import { Box } from 'styles/Box';
import { IoLogOutOutline } from 'react-icons/io5';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { setIsOpen } from 'redux/contacts/contactsSlice';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Box as="div" display="flex" alignItems="center">
      <Text>Welcome, {user.name}</Text>
      <Button
        type="button"
        onClick={() => {
          dispatch(logOut());
          dispatch(setIsOpen(false));
        }}
      >
        <IoLogOutOutline />
      </Button>
    </Box>
  );
};
