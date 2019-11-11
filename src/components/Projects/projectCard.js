import React from 'react';

import styles from './projectCard.module.scss';

// props: title, technology
// children: description
const projectCard = ({ title, tools, image, children }) => {
  const toolItems = tools.map(tool => {
    return (
      <li key={tool} className={styles.tool}>
        {tool}
      </li>
    );
  });
  return (
    <div className={styles.card}>
      <div
        style={{
          width: '100%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className={styles.description}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.tools}>{toolItems}</ul>
        <div className={styles.about}>{children}</div>
      </div>
    </div>
  );
};

export default projectCard;
