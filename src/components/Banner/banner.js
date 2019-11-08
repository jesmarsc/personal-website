import React from 'react';

import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import styles from './banner.module.css';
import resume from '../../assets/resume.pdf';
import bannerCover from '../../assets/banner.svg';
import IconWithText from '../Logos/IconWithText';

const banner = () => {
  return (
    <div
      className={styles.row}
      style={{
        backgroundImage: `url(${bannerCover})`
      }}
    >
      <div className={styles.column}>
        <span className={styles.banner}>
          <strong>Jesmar.</strong>
        </span>
        <div>
          <a
            href="https://github.com/jesmarsc"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <IconWithText component={FaGithub}> Github</IconWithText>
          </a>
          <a
            href="https://www.linkedin.com/in/jesmar-castillo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <IconWithText component={FaLinkedin}> Linkedin</IconWithText>
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <IconWithText component={FaFilePdf}> Resume</IconWithText>
          </a>
        </div>
      </div>
    </div>
  );
};

export default banner;
