import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Loader } from 'components';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
