import { Fragment, useContext } from 'react';

import AuthContext from './store/auth-context';
import LoginForm from './components/Auth/LoginForm';
import Messenger from './components/Messenger/Messenger';

const App = () => {
  const { user, signIn } = useContext(AuthContext);

  const loginHandler = ({ email, password }) => {
    signIn(email, password);
  };
  
  return (
    <Fragment>
      {!user && <LoginForm onLogin={loginHandler} />}
      {!!user && <Messenger user={user} />}
    </Fragment>
  );
};

export default App;
