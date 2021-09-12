import styles from './Card.module.css';

const Card = ({ className, children }) => {
  const cardClassName = [styles.card, className ? className : '']
    .filter((style) => style.length)
    .join(' ');

  return (
    <div className={cardClassName}>
      <div className={styles['card-content']}>{children}</div>
    </div>
  );
};

export default Card;
