import React, { useCallback, useEffect } from 'react';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';

import { firebaseAuth } from '../firebase';

const AuthContext = React.createContext({
  user: null,
  creationTime: 0,
  signIn: (email, password) => {},
  signOut: () => {},
  register: (email, password) => {},
});

const localStorageKey = 'react-messenger-credentials';

export const AuthContextProvider = ({ children }) => {
  const [user] = useAuthState(firebaseAuth);
  const [signInWithEmailAndPassword] =
    useSignInWithEmailAndPassword(firebaseAuth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(firebaseAuth);
  const creationTime = user
    ? new Date(user.metadata.creationTime).getTime()
    : 0;

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
  }, []);

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
