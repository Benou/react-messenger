import React, { useCallback, useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { firebaseAuth } from '../firebase';

const AuthContext = React.createContext({
  user: null,
  signIn: (email, password) => {},
  signOut: () => {}
});

const localStorageKey = 'react-messenger-credentials';

export const AuthContextProvider = ({ children }) => {
  const [user] = useAuthState(firebaseAuth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(firebaseAuth);

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

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem(localStorageKey));
    if (credentials) {
      signInHandler(credentials.email, credentials.password, true);
    }
  }, [signInHandler]);

  return (
    <AuthContext.Provider
      value={{ user, signIn: signInHandler, signOut: signOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
