import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const PublicRoute = ({ children, redirected = false, redirectTo = '/', ...routeProps }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && redirected;
  return <Route {...routeProps}>{shouldRedirect ? <Redirect to={redirectTo} /> : children}</Route>;
};
export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
  redirected: PropTypes.bool,
};
