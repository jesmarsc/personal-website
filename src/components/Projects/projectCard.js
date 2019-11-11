import React from 'react';
import { IconWithText } from '../Logos';
import { FaCode, FaPlayCircle } from 'react-icons/fa';
import styles from './projectCard.module.scss';

// props: title, technology
// children: description
const projectCard = ({ title, tools, image, children, github, demo }) => {
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
        <nav className={styles.links}>
          <ul>
            <li>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <IconWithText component={FaCode}> Code</IconWithText>
              </a>
            </li>
            <li>
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <IconWithText component={FaPlayCircle}> Demo</IconWithText>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default projectCard;
