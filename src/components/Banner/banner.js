import React from 'react';
import { Link } from 'gatsby';

import { FaCode, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import styles from './banner.module.scss';
import bannerCover from '@assets/banner.svg';
import { IconWithText } from '@components';

const banner = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bannerCover})`
      }}
    >
      <h1 className={styles.header}>Jesmar.</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/projects" className={styles.button}>
              <IconWithText component={FaCode}>Projects</IconWithText>
            </Link>
          </li>
          <li>
            <a
              href={'./jesmar-castillo-resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <IconWithText component={FaFilePdf}>Resume</IconWithText>
            </a>
          </li>
          <div className={styles.divider} />
          <li>
            <a
              href="https://github.com/jesmarsc"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <IconWithText component={FaGithub}>Github</IconWithText>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jesmar-castillo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <IconWithText component={FaLinkedin}>LinkedIn</IconWithText>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default banner;
