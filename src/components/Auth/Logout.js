import { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import MonsterList from '../Monsters/MonsterList';
import Button from '../UI/Button';
import styles from './Logout.module.css';

const Logout = ({ monsters }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <div className={styles.logout}>
      <MonsterList monsters={monsters}></MonsterList>
      <Button onClick={signOut}>Déconnexion</Button>
    </div>
  );
};

export default Logout;
