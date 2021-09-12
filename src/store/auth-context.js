import React, { useCallback, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { firebaseAuth } from '../firebase';

const AuthContext = React.createContext({
  user: null,
  signIn: (email, password) => {},
});

const localStorageKey = 'react-messenger-credentials';

export const AuthContextProvider = ({ children }) => {
  const [signInWithEmailAndPassword, authState] =
    useSignInWithEmailAndPassword(firebaseAuth);
  const user = authState ? authState.user : null;

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

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem(localStorageKey));
    if (credentials) {
      signInHandler(credentials.email, credentials.password, true);
    }
  }, [signInHandler]);

  return (
    <AuthContext.Provider value={{ user, signIn: signInHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
