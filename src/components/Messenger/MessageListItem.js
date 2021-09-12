import styles from './MessageListItem.module.css';

const MessageListItem = ({ id, text, isMyMessage, monsterId }) => {
  const itemClassName = [
    styles['message-list-item'],
    isMyMessage ? styles['my-message'] : '',
  ]
    .filter((style) => style.length)
    .join(' ');

  return (
    <li className={itemClassName} id={`message-${id}`}>
      <img
        src={`https://www.gravatar.com/avatar/${monsterId}?d=monsterid&f=y`}
        alt="avatar"
      />
      <div className={styles['message-list-item-message']}>{text}</div>
    </li>
  );
};

export default MessageListItem;
