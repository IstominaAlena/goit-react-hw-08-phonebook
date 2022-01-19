import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { dataCapture, resetForm } from '../../shared/functions/onFormFn';
import { loginUser } from '../../redux/auth/authOperations';

import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import s from './LoginPage.module.css';
const LoginPage = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const loginData = dataCapture(e);

    const { email, password } = loginData;

    if (!email || !password) {
      return alert('Please fill the form');
    }

    dispatch(loginUser(loginData));
    resetForm('loginForm');
  }
  return (
    <>
      <h3 className={s.title}>Authorization</h3>
      <form className={s.form} onSubmit={handleSubmit} id="loginForm">
        <Input labelName="Email" type="email" name="email" placeholderValue="example@mail.com" />

        <Input
          labelName="Password"
          type="password"
          name="password"
          minLength="7"
          maxLength="20"
          placeholderValue="*********"
        />

        <Button type="submit" text="Login" />
      </form>

      <Link to="/signup" className={s.link} activeclassname={s.active}>
        Signup
      </Link>
    </>
  );
};
export default LoginPage;
