import { useState } from 'react';

import useFormValidation from '../../hooks/use-form-validation-hook';
import { Validators } from '../../utils/Validators';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Input from '../UI/Input';
import styles from './RegisterForm.module.css';

const RegisterForm = ({ onRegister, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState({});
  const validation = useFormValidation({
    email: [
      email,
      [Validators.required(), Validators.email(), Validators.maxlength(64)],
    ],
    password: [
      password,
      [
        Validators.required(),
        Validators.minlength(8),
        Validators.maxlength(16),
      ],
    ],
    confirmPassword: [
      confirmPassword,
      [Validators.required(), Validators.password(password)],
    ],
  });

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const blurHandler = (event) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [event.target.id]: true,
    }));
  };

  const submitLoginHandler = (event) => {
    event.preventDefault();

    if (validation.email && validation.password && validation.confirmPassword) {
      onRegister({ email, password });
    }
  };

  return (
    <Card>
      <form
        className={styles['register-form']}
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
            touched.email &&
            !validation.email &&
            'Veuillez saisir votre e-mail au bon format'
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
            'Veuillez saisir un mot de passe entre 8 et 16 charactères'
          }
          minLength="8"
          maxLength="16"
          onChange={passwordChangeHandler}
          onBlur={blurHandler}
        />
        <Input
          id="confirmPassword"
          type="password"
          label="Confirmation du mot de passe"
          value={confirmPassword}
          error={
            touched.confirmPassword &&
            !validation.confirmPassword &&
            'Veuillez saisir le même mot de passe'
          }
          minLength="8"
          maxLength="16"
          onChange={confirmPasswordChangeHandler}
          onBlur={blurHandler}
        />
        <div className={styles['register-form-actions']}>
          <Button onClick={onCancel}>Annuler</Button>
          <Button
            type="submit"
            disabled={
              !validation.email ||
              !validation.password ||
              !validation.confirmPassword
            }
          >
            Créer mon compte
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default RegisterForm;
