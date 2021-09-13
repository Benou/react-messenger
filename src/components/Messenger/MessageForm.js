import { useState } from 'react';

import useFormValidation from '../../hooks/use-form-validation-hook';
import { Validators } from '../../utils/Validators';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';
import styles from './MessageForm.module.css';

const MessageForm = ({ onAddMessage }) => {
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({});
  const validation = useFormValidation({
    message: [message, [Validators.required(), Validators.maxlength(128)]],
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
      <form onSubmit={submitHandler} noValidate autoComplete="off">
        <div className={styles['message-form']}>
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
          <Button
            type="submit"
            className={styles['message-form-button']}
            disabled={!validation.message}
          >
            Envoyer
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default MessageForm;
