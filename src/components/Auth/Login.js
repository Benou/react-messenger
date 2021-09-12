import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import LoginForm from './LoginForm';
import styles from './Login.module.css';

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

  return (
    <div className={styles.login}>
      <LoginForm onLogin={loginHandler} />
    </div>
  );
};

export default Login;
