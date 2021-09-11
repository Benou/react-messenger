import { Fragment } from 'react';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firestore } from '../../firebase';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const Messenger = ({ user }) => {
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
