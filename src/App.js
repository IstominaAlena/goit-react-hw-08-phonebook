import { lazy, Suspense } from 'react';
import './styles/App.css';

import Header from './components/Header';

const HomePage = lazy(() => import('../../../pages/HomePage' /* webpackChunkName: "home-page" */));
const SignupPage = lazy(() =>
  import('../../../pages/SignupPage' /* webpackChunkName: "movies-page" */)
);
const LoginPage = lazy(() =>
  import('../../../pages/LoginPage' /* webpackChunkName: "movie-details-page" */)
);
const ContactsPage = lazy(() =>
  import('../../../pages/ContactsPage' /* webpackChunkName: "movie-details-page" */)
);

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={<HomePage />} />

          <Route exact path="/signup" component={<SignupPage />} />

          <Route path="/login" omponent={<LoginPage />} />

          <Route path="/contacts" omponent={<ContactsPage />} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
