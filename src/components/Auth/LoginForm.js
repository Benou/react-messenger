import { useState } from 'react';

import Card from '../UI/Card';

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
      <form onSubmit={submitLoginHandler}>
        <div>
          <label>E-mail</label>
          <input type="email" value={email} onChange={emailChangeHandler} />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
