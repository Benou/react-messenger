import React, { useCallback, useReducer } from 'react';
import Modal from '../components/UI/Modal';

const ModalContext = React.createContext({
  isVisible: false,
  show: (title, message) => {},
});

const initialState = {
  title: '',
  message: '',
  isVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        isVisible: true,
        title: action.title,
        message: action.message,
      };
    default:
      return { ...initialState };
  }
};

export const ModalContextProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(reducer, { ...initialState });

  const showHandler = useCallback((title, message) => {
    dispatch({ type: 'SHOW_MODAL', title, message });
  }, []);

  const confirmHandler = () => {
    dispatch({ type: 'HIDE_MODAL' });
  };

  return (
    <ModalContext.Provider
      value={{ isVisible: modalState.isVisible, show: showHandler }}
    >
      {modalState.isVisible && (
        <Modal {...modalState} onConfirm={confirmHandler} />
      )}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
