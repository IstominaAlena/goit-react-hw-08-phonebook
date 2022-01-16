import Section from '../../shared/components/Section';
import SignupForm from '../../components/SignupForm';
import LoginForm from '../../components/LoginForm';

const MainPage = () => {
  return (
    <Section title={'Join us!'} classEl={'signup'}>
      <SignupForm />
      <LoginForm />
    </Section>
  );
};

export default MainPage;
