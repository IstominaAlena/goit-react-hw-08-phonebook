import { useDispatch } from 'react-redux';

import { dataCapture, resetForm } from '../../shared/functions/onFormFn';
import { signupUser } from '../../redux/auth/authOperations';

import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';

import s from './SignupPage.module.css';

const SignupPage = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const signupData = dataCapture(e);

    const { name, email, password } = signupData;

    if (!name || !email || !password) {
      return alert('Please fill the form');
    }
    dispatch(signupUser(signupData));
    resetForm('signupForm');
  }

  return (
    <>
      <h3 className={s.title}>Registration</h3>
      <form className={s.form} onSubmit={handleSubmit} id="signupForm">
        <Input
          labelName="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholderValue="Jane Doe"
        />

        <Input labelName="Email" type="email" name="email" placeholderValue="example@mail.com" />

        <Input
          labelName="Password"
          type="password"
          name="password"
          minLength="7"
          maxLength="20"
          placeholderValue="*********"
        />

        <Button type="submit" text="Signup" />
      </form>
    </>
  );
};
export default SignupPage;
