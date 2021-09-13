import styles from './MonsterAvatar.module.css';

const MonsterAvatar = ({ className, monsterId }) => {
  const imgClassName = [styles.avatar, className ? className : '']
    .filter((style) => style.length)
    .join(' ');

  return (
    <img
      className={imgClassName}
      src={`https://www.gravatar.com/avatar/${monsterId}?d=monsterid&f=y`}
      alt="avatar"
    />
  );
};

export default MonsterAvatar;
