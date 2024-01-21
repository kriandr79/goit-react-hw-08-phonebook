import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import Loader from './Loader/Loader';
import Error from './Error/Error';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Loader />
      <Error />
      <main>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
