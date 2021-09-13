import firebase from 'firebase/app';
import { useContext, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {
  messagesCollection,
  messagesQuery,
  monstersQuery,
} from '../../firebase';
import AuthContext from '../../store/auth-context';
import Logout from '../Auth/Logout';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import styles from './Messenger.module.css';

const Messenger = () => {
  const { user, creationTime } = useContext(AuthContext);
  const [collectionData] = useCollectionData(messagesQuery, { idField: 'id' });
  const [monsters] = useCollectionData(monstersQuery, { idField: 'id' });
  const messages = (collectionData || []).map((message) =>
    Object.assign(message, {
      isMyMessage: message.userId === user.uid,
    })
  );

  const addMessageHandler = (message) => {
    messagesCollection.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userId: user.uid,
      monsterId: creationTime,
    });
  };

  useEffect(() => {
    if (messages.length) {
      const lastMessage = messages[messages.length - 1];
      const el = document.getElementById(`message-${lastMessage.id}`);
      el && el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={styles.messenger}>
      <Logout monsters={monsters}></Logout>
      <MessageList messages={messages} />
      <MessageForm onAddMessage={addMessageHandler} />
    </div>
  );
};

export default Messenger;
