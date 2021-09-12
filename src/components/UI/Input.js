import styles from './Input.module.css';

const Input = ({ className, id, type, label, ...rest }) => {
  return (
    <div className={`${styles['input-group']} ${className}`}>
      { label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type || 'text'} {...rest} />
    </div>
  );
};

export default Input;
