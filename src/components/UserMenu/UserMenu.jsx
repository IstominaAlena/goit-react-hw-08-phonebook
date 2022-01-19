import { useSelector, useDispatch } from 'react-redux';

import { logoutUser } from '../../redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelectors';

import Button from '../../shared/components/Button';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s['user-container']}>
      <p className={s.text}>
        Welcome back <span className={s.name}>{name}</span>
      </p>
      <Button
        text="Logout"
        type="button"
        className={'logout'}
        onClick={() => dispatch(logoutUser())}
      />
    </div>
  );
};
export default UserMenu;
