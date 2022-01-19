import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ type, text, onClick, className }) => {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      type={type}
      className={type === 'submit' ? s.submitBtn : s[className]}
    >
      {text}
    </button>
  );
};
export default Button;

Button.defaultProps = {
  type: 'button',
  onClick: undefined,
  className: 'btn',
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
