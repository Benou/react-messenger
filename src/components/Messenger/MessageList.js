import MessageListItem from './MessageListItem';

const MessageList = ({ messages }) => {
  const items = (messages || []).map(message => <MessageListItem message={message} key={message.id} />);
  
  return (
    <ul>
      {items}
    </ul>
  );
};

export default MessageList;
