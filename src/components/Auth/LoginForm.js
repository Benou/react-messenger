import { useState } from 'react';

import Card from '../UI/Card';
import Input from '../UI/Input';
import styles from './LoginForm.module.css';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitLoginHandler = (event) => {
    event.preventDefault();
    props.onLogin({ email, password });
  };

  return (
    <Card>
      <form
        className={styles['login-form']}
        onSubmit={submitLoginHandler}
        noValidate
        autoComplete="off"
      >
        <Input
          id="email"
          type="email"
          label="E-mail"
          value={email}
          onChange={emailChangeHandler}
        />
        <Input
          id="password"
          type="password"
          label="Mot de passe"
          value={password}
          onChange={passwordChangeHandler}
        />
        <div>
          <button>Login</button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
