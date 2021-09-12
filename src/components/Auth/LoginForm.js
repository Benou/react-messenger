import { useState } from 'react';

import useFormValidation from '../../hooks/use-form-validation-hook';
import { Validators } from '../../utils/Validators';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({});
  const validation = useFormValidation({
    email: [email, [Validators.required()]],
    password: [password, [Validators.required()]],
  });

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const blurHandler = (event) => {
    setTouched((prevTouched) => ({ ...prevTouched, [event.target.id]: true }));
  };

  const submitLoginHandler = (event) => {
    event.preventDefault();

    if (validation.email && validation.password) {
      onLogin({ email, password });
    }
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
          error={
            touched.email && !validation.email && 'Veuillez saisir votre e-mail'
          }
          maxLength="64"
          onChange={emailChangeHandler}
          onBlur={blurHandler}
        />
        <Input
          id="password"
          type="password"
          label="Mot de passe"
          value={password}
          error={
            touched.password &&
            !validation.password &&
            'Veuillez saisir votre mot de passe'
          }
          minLength="8"
          maxLength="16"
          onChange={passwordChangeHandler}
          onBlur={blurHandler}
        />
        <div className={styles['login-form-actions']}>
          <Button
            type="submit"
            disabled={!validation.email || !validation.password}
          >
            Se connecter
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
