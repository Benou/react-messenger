import Card from '../UI/Card';
import MessageListItem from './MessageListItem';
import styles from './MessageList.module.css';

const MessageList = ({ messages }) => {
  const items = (messages || []).map((message) => (
    <MessageListItem message={message} key={message.id} />
  ));

  return (
    <Card className={styles['message-list']}>
      <ul>{items}</ul>
    </Card>
  );
};

export default MessageList;
