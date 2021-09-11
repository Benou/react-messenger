import { useState } from 'react';

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
    <form onSubmit={submitLoginHandler}>
    <div>
      <label>Email</label>
      <input type="email" value={email} onChange={emailChangeHandler} />
    </div>
    <div>
      <label>Password</label>
      <input type="password" value={password} onChange={passwordChangeHandler} />
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
  );
};

export default LoginForm;
