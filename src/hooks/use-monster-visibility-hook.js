import { useCallback, useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { monstersCollection } from '../firebase';

const useMonsterVisibility = (user, monsterId) => {
  const monsterQuery = user ? monstersCollection.where('userId', '==', user.uid) : null;
  const [monsters] = useCollectionData(monsterQuery, { idField: 'id' });
  const [currentMonster, setCurrentMonster] = useState(null);
  
  const addMonster = useCallback(() => {
    monstersCollection.add({ userId: user.uid, monsterId, visible: false });
  }, [user, monsterId]);

  const setMonsterVisibility = useCallback(async (visible) => {
    if (!currentMonster) {
      return;
    }
    
    await monstersCollection.doc(`${currentMonster.id}`).update({ visible });
  }, [currentMonster]);

  useEffect(() => {
    if (monsters) {
      monsters.length ? setCurrentMonster(monsters[0]) : addMonster();
    }
  }, [monsters, addMonster]);

  return [currentMonster, setMonsterVisibility];
}

export default useMonsterVisibility;
