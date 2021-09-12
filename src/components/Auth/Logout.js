import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';

import AuthContext from '../../store/auth-context';
import Button from '../UI/Button';

const Logout = () => {
  const history = useHistory();
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user, history]);

  return (
    <div>
      <Button onClick={signOut}>Déconnexion</Button>
    </div>
  );
};

export default Logout;
