import { Switch } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import Spinner from '../Spinner';
import PrivateRoute from '../PrivatRoute';
import PublicRoute from '../PublicRoute';

const HomePage = lazy(() => import('../../pages/HomePage' /* webpackChunkName: "home-page" */));
const LoginPage = lazy(() => import('../../pages/LoginPage' /* webpackChunkName: "login-page" */));
const SignupPage = lazy(() =>
  import('../../pages/SignupPage' /* webpackChunkName: "signup-page" */)
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
);

const Routes = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute path="/login" redirected redirectTo="/contacts">
            <LoginPage />
          </PublicRoute>

          <PublicRoute path="/signup" redirected>
            <SignupPage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
};
export default Routes;
