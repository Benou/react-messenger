import { useState } from 'react';

import Card from '../UI/Card';
import styles from './MessageForm.module.css';

const MessageForm = ({ onAddMessage }) => {
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
      <form className={styles['message-form']} onSubmit={submitHandler}>
        <div className={styles['form-group']}>
          <input
            type="text"
            placeholder="Dites quelque chose..."
            value={message}
            onChange={messageChangeHandler}
          ></input>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default MessageForm;
