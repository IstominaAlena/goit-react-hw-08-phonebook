import { SpinnerDotted } from 'spinners-react';

const Spinner = () => {
  return (
    <SpinnerDotted
      style={{
        color: 'rgb(136, 119, 181)',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Spinner;
