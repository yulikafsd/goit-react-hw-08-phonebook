import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader, NotFound } from 'components';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'components/routes/RestrictedRoute';
import { PrivateRoute } from 'components/routes/PrivateRoute';
import SharedLayout from './components/sharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/home/Home'));
const RegisterPage = lazy(() => import('./pages/register/Register'));
const LoginPage = lazy(() => import('./pages/login/Login'));
const ContactsPage = lazy(() => import('./pages/сontacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
