const MessageListItem = ({ message }) => {
  return (
    <li id={`message-${message.id}`}>
      {message.text}
    </li>
  );
};

export default MessageListItem;
