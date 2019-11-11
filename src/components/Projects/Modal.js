import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, onRequestClose, children }) => {
  const classes = [styles.modal];
  if (!isOpen) classes.push(styles.display);

  return (
    <div onClick={onRequestClose} className={classes.join(' ')}>
      <button>hello there</button>
      {children}
    </div>
  );
};

export default Modal;
