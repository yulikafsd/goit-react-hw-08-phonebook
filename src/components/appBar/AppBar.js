import { Header, Menu, Line } from './AppBar.styled';
import { Navigation, AuthNav, UserMenu } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <Menu>
          <Navigation isLoggedIn={isLoggedIn} />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Menu>
      </Header>
      <Line />
    </>
  );
};
