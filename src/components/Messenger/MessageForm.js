import { useState } from 'react';

import Card from '../UI/Card';
import Input from '../UI/Input';
import Button from '../UI/Button';
import styles from './MessageForm.module.css';
import useFormValidation from '../../hooks/use-form-validation-hook';
import { Validators } from '../../utils/Validators';

const MessageForm = ({ onAddMessage, onFocus, onBlur }) => {
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({});
  const validation = useFormValidation({
    message: [message, [Validators.required()]],
  });

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const blurHandler = (event) => {
    setTouched((prevTouched) => ({ ...prevTouched, [event.target.id]: true }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (validation.message) {
      onAddMessage(message);
      setMessage('');
      setTouched({});
    }
  };

  return (
    <Card>
      <form
        className={styles['message-form']}
        onSubmit={submitHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        noValidate
        autoComplete="off"
      >
        <Input
          id="message"
          className={styles['message-form-input']}
          placeholder="Dites quelque chose..."
          value={message}
          error={
            touched.message &&
            !validation.message &&
            'Veuillez saisir un message'
          }
          maxLength="128"
          onChange={messageChangeHandler}
          onBlur={blurHandler}
        />
        <Button type="submit" disabled={!validation.message}>
          Envoyer
        </Button>
      </form>
    </Card>
  );
};

export default MessageForm;
