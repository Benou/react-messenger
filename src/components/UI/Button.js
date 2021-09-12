import styles from './Button.module.css';

const Button = ({ className, children, type, ...rest }) => {
  const buttonClassName = [styles.button, className ? className : '']
    .filter((style) => style.length)
    .join(' ');

  return (
    <button type={type || 'button'} className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
