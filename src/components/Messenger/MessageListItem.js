import MonsterAvatar from '../Monsters/MonsterAvatar';
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
      <MonsterAvatar className={styles['message-list-item-avatar']} monsterId={monsterId}></MonsterAvatar>
      <div className={styles['message-list-item-text']}>{text}</div>
    </li>
  );
};

export default MessageListItem;
