import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import s from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <>
      <form className={s.form}>
        <Input
          labelName="Email"
          type="email"
          name="email"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // placeholderValue="Jane Doe"
        />

        <Input
          labelName="Password"
          type="password"
          name="password"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // placeholderValue="+38-099-123-45-67"
        />

        <Button type="submit" text="Login" />
      </form>
    </>
  );
};
export default LoginForm;
