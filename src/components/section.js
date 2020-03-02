import React from 'react';
import styles from './section.module.scss';

const section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
};

export default section;
