import styles from './Input.module.css';

const Input = ({ className, id, type, label, error, ...rest }) => {
  const inputGroupClassName = [
    styles['input-group'],
    className ? className : '',
    error ? styles['error'] : '',
  ]
    .filter((style) => style.length)
    .join(' ');

  return (
    <div className={inputGroupClassName}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type || 'text'} {...rest} />
      {!!error && <p className={styles['input-group-hint']}>{error}</p>}
    </div>
  );
};

export default Input;
