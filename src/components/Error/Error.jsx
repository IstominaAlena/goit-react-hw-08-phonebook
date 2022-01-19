import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import s from './Error.module.css';

const Error = ({ text }) => {
  const error = useSelector(state => state[text].error);
  return (
    <div className={s['error-container']}>
      <img
        src={'https://icons.iconarchive.com/icons/gakuseisean/ivista-2/128/Alarm-Error-icon.png'}
        alt="error"
        width="50"
        className={s['error-img']}
      />
      <p className={s['error-text']}>
        <span>Error: </span>
        {error}
      </p>
    </div>
  );
};
export default Error;

Error.propTypes = {
  text: PropTypes.string,
};
