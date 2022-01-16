import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './Input.module.css';

const Input = props => {
  const id = nanoid();

  const {
    labelName,
    value,
    onChange,
    type,
    name,
    pattern,
    title,
    placeholderValue,
    minLength,
    maxLength,
  } = props;

  return (
    <div className={name === 'filter' ? styles.filterComponent : styles.formComponent}>
      <label htmlFor={id} className={styles.formLabel}>
        {labelName}:
      </label>
      <input
        className={styles.formInput}
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        placeholder={placeholderValue}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;

Input.defaultProps = {
  type: 'text',
  placeholder: undefined,
  minLength: undefined,
  maxLength: undefined,
};

Input.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
};
