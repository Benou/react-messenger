import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';

import AuthContext from '../../store/auth-context';

const Logout = () => {
  const history = useHistory();
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user, history]);

  return <button onClick={signOut}>Logout</button>
};

export default Logout;
