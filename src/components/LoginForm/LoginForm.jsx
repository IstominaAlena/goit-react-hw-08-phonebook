import { useSelector, useDispatch } from 'react-redux';

import { dataCapture, resetForm } from '../../shared/functions/onFormFn';

import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import s from './LoginForm.module.css';

const LoginForm = () => {
  function handleSubmit(e) {
    e.preventDefault();

    const loginData = dataCapture(e);

    const { email, password } = loginData;

    if (!email || !password) {
      return alert('Please fill the form');
    }

    console.log(loginData);

    resetForm('loginForm');
  }
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit} id="loginForm">
        <Input labelName="Email" type="email" name="email" placeholderValue="example@mail.com" />

        <Input
          labelName="Password"
          type="password"
          name="password"
          minLength="5"
          maxLength="12"
          placeholderValue="*********"
        />

        <Button type="submit" text="Login" />
      </form>
    </>
  );
};
export default LoginForm;
