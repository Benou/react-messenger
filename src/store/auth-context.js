import React, { useCallback, useContext, useEffect } from 'react';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';

import { firebaseAuth } from '../firebase';
import useMonsterVisibility from '../hooks/use-monster-visibility-hook';
import ModalContext from './modal-context';

const AuthContext = React.createContext({
  user: null,
  creationTime: 0,
  signIn: (email, password) => {},
  signOut: () => {},
  register: (email, password) => {},
});

const localStorageKey = 'react-messenger-credentials';

export const AuthContextProvider = ({ children }) => {
  const { show: showModal } = useContext(ModalContext);
  const [user] = useAuthState(firebaseAuth);
<<<<<<< HEAD
  const [signInWithEmailAndPassword, , , signInError] =
    useSignInWithEmailAndPassword(firebaseAuth);
  const [createUserWithEmailAndPassword, , , registerError] =
=======
  const [signInWithEmailAndPassword, , signInError] =
    useSignInWithEmailAndPassword(firebaseAuth);
  const [createUserWithEmailAndPassword, , registerError] =
>>>>>>> feat(UI): add modal component
    useCreateUserWithEmailAndPassword(firebaseAuth);
  const creationTime = user
    ? new Date(user.metadata.creationTime).getTime()
    : 0;
  const [monster, setMonsterVisibility] = useMonsterVisibility(
    user,
    creationTime
  );

  const signInHandler = useCallback(
    (email, password, memoize = false) => {
      signInWithEmailAndPassword(email, password);

      if (memoize) {
        localStorage.setItem(
          localStorageKey,
          JSON.stringify({ email, password })
        );
      } else {
        localStorage.removeItem(localStorageKey);
      }
    },
    [signInWithEmailAndPassword]
  );

  const signOutHandler = useCallback(async () => {
    await firebaseAuth.signOut();
    setMonsterVisibility(false);
  }, [setMonsterVisibility]);

  const registerHandler = useCallback(
    (email, password) => {
      createUserWithEmailAndPassword(email, password);
    },
    [createUserWithEmailAndPassword]
  );

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem(localStorageKey));
    if (credentials) {
      signInHandler(credentials.email, credentials.password, true);
    }
  }, [signInHandler]);

  useEffect(() => {
    if (signInError || registerError) {
      showModal(
        'Oups une erreur est survenue',
<<<<<<< HEAD
        (signInError || registerError).toString()
=======
        'Veuillez réessayer plus tard !'
>>>>>>> feat(UI): add modal component
      );
    }
  }, [signInError, registerError, showModal]);

  useEffect(() => {
    if (user && monster) {
      setMonsterVisibility(true);
    }
  }, [user, monster, setMonsterVisibility]);

  return (
    <AuthContext.Provider
      value={{
        user,
        creationTime,
        signIn: signInHandler,
        signOut: signOutHandler,
        register: registerHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
