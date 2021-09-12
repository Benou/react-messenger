import styles from './Card.module.css';

const Card = ({ className, children }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles['card-content']}>{children}</div>
    </div>
  );
};

export default Card;
