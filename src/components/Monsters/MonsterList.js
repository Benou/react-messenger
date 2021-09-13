import MonsterAvatar from './MonsterAvatar';
import styles from './MonsterList.module.css';

const MonsterList = ({ monsters }) => {
  return (
    <ul className={styles['monster-list']}>
      {(monsters || []).map((monster) => (
        <li key={monster.id}>
          <MonsterAvatar monsterId={monster.monsterId}></MonsterAvatar>
        </li>
      ))}
    </ul>
  );
};

export default MonsterList;
