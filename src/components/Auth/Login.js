import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import LoginForm from './LoginForm';

const Login = () => {
  const history = useHistory();
  const { user, signIn } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      history.push('/messenger');
    }
  }, [user, history]);

  const loginHandler = ({ email, password }) => {
    signIn(email, password);
  };

  return <LoginForm onLogin={loginHandler} />;
};

export default Login;
