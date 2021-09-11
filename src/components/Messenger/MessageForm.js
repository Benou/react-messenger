import { useState } from 'react';

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
    <form onSubmit={submitHandler}>
      <div>
        <label>Say</label>
        <input
          type="text"
          value={message}
          onChange={messageChangeHandler}
        ></input>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default MessageForm;
