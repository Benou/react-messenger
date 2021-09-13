import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import styles from './Register.module.css';
import RegisterForm from './RegisterForm';

const Register = () => {
  const history = useHistory();
  const { user, register } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      history.push('/messenger');
    }
  }, [user, history]);

  const registerHandler = ({ email, password }) => {
    register(email, password);
  };

  const cancelHandler = () => {
    history.push('/login');
  };

  return (
    <div className={styles.register}>
      <RegisterForm onRegister={registerHandler} onCancel={cancelHandler} />
    </div>
  );
};

export default Register;
