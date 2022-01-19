import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getIsLoggedIn } from '../../redux/auth/authSelectors';

import UserMenu from '../UserMenu';

import s from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s['header-section']}>
      <nav className={s.navigation}>
        <NavLink exact to="/" className={s.link} activeClassName={s.active}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className={s.link} activeClassName={s.active}>
            My phonebook
          </NavLink>
        )}

        {!isLoggedIn && (
          <NavLink to="/login" className={s.link} activeClassName={s.active}>
            LogIn
          </NavLink>
        )}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default Header;
