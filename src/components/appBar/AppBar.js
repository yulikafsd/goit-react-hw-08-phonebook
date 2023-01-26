import { Header, Menu, Line } from './AppBar.styled';
import { Navigation, AuthNav, UserMenu } from 'components';

export const AppBar = () => {
  return (
    <>
      <Header>
        <Menu>
          {/* <Navigation isLoggedIn={isLoggedIn} />
          {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
          <Navigation />
          <UserMenu />
          <AuthNav />
        </Menu>
      </Header>
      <Line />
    </>
  );
};
