import React from 'react';

import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import styles from './banner.module.scss';
import resume from '../../assets/resume.pdf';
import bannerCover from '../../assets/banner.svg';
import { IconWithText } from '../Logos';

const banner = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bannerCover})`
      }}
    >
      <header className={styles.header}>Jesmar.</header>
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/jesmarsc"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <IconWithText component={FaGithub}> Github</IconWithText>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jesmar-castillo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <IconWithText component={FaLinkedin}> Linkedin</IconWithText>
            </a>
          </li>
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <IconWithText component={FaFilePdf}> Resume</IconWithText>
            </a>
          </li>
        </ul>
      </nav>

      <span className={styles.scroll} />
    </div>
  );
};

export default banner;
