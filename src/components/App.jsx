import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { refreshUser } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';


const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));


export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing, token } = useAuth()
  
  useEffect(() => {
    token && dispatch(refreshUser());

  }, [dispatch, token]);

  return (
    !isRefreshing && (
      <>

      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
        </Suspense>
        </>
    )
  );
};