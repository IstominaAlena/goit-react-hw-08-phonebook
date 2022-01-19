import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { refreshUser } from './redux/auth/authOperations';
import { getRefreshStatus } from './redux/auth/authSelectors';

import Header from './components/Header';
import Routes from './components/Routes';

import './styles/App.css';

export default function App() {
  const dispatch = useDispatch();
  const refreshStatus = useSelector(getRefreshStatus);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !refreshStatus && (
      <>
        <Header />
        <Routes />
      </>
    )
  );
}
