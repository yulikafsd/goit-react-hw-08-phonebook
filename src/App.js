import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from 'components';

const SharedLayout = lazy(() =>
  import('./components/sharedLayout/SharedLayout')
);
const HomePage = lazy(() => import('./pages/home/Home'));
const RegisterPage = lazy(() => import('./pages/register/Register'));
const LoginPage = lazy(() => import('./pages/login/Login'));
const ContactsPage = lazy(() => import('./pages/сontacts/Contacts'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
