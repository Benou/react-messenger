import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import styles from './Modal.module.css';

const Backdrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm}></div>;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = ({ title, message, onConfirm }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default Modal;
