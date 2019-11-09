import React from 'react';
import styles from './IconWithText.module.scss';

const IconWithText = ({ component, className, style, children }) => {
  const Component = component;
  return (
    <div className={className} style={style}>
      <Component className={styles.icon} />
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default IconWithText;
