import { useState } from 'react';

import Card from '../UI/Card';
import Input from '../UI/Input';
import styles from './MessageForm.module.css';

const MessageForm = ({ onAddMessage, onFocus, onBlur }) => {
  const [message, setMessage] = useState('');

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAddMessage(message);
    setMessage('');
  };

  return (
    <Card>
      <form className={styles['message-form']} onSubmit={submitHandler} onFocus={onFocus} onBlur={onBlur}>
        <Input
          className={styles['message-form-input']}
          placeholder="Dites quelque chose..."
          value={message}
          onChange={messageChangeHandler}
        />
        <div>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default MessageForm;
