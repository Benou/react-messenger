import { Fragment, useContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';

import { firestore } from '../../firebase';
import AuthContext from '../../store/auth-context';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const Messenger = () => {
  const { user } = useContext(AuthContext);
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const addMessageHandler = (message) => {
    messagesRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      userId: user.uid
    });
  };

  return (
    <Fragment>
      <MessageList messages={messages} />
      <MessageForm onAddMessage={addMessageHandler} />
    </Fragment>
  );
};

export default Messenger;
