import { dataCapture, resetForm } from '../../shared/functions/onFormFn';

import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import s from './SignupForm.module.css';

const SignupForm = () => {
  function handleSubmit(e) {
    e.preventDefault();

    const signupData = dataCapture(e);

    const { name, email, password } = signupData;

    if (!name || !email || !password) {
      return alert('Please fill the form');
    }

    console.log(signupData);

    resetForm('signupForm');
  }
  return (
    <>
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
          minLength="5"
          maxLength="12"
          placeholderValue="*********"
        />

        <Button type="submit" text="Signup" />
      </form>
    </>
  );
};
export default SignupForm;
