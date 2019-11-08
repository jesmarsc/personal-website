import React from 'react';
import styles from './section.module.scss';

const section = ({ id, title, children }) => {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default section;
