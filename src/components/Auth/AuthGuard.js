import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

const AuthGuard = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);

  const render = () => {
    return !!user ? children : <Redirect to={{ pathname: '/login' }} />;
  };

  return <Route {...rest} render={render} />;
};

export default AuthGuard;
