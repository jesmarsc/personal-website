import React from 'react';
import { Link } from 'gatsby';
import { FaCode, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

import bannerCover from 'src/assets/banner.svg';
import { IconWithText } from 'src/components';

import * as classes from './Banner.module.scss';

const Banner = () => {
  console.log(classes);
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${bannerCover})`
      }}
    >
      <h1 className={classes.header} style={{ fontFamily: 'Ubuntu' }}>
        Jesmar
      </h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/projects" className={classes.button}>
              <IconWithText component={FaCode}>Projects</IconWithText>
            </Link>
          </li>
          <li>
            <a
              href={'./jesmar-castillo-resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
            >
              <IconWithText component={FaFilePdf}>Resume</IconWithText>
            </a>
          </li>
          <li className={classes.divider} />
          <li>
            <a
              href="https://github.com/jesmarsc"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
            >
              <IconWithText component={FaGithub}>Github</IconWithText>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jesmar-castillo"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
            >
              <IconWithText component={FaLinkedin}>LinkedIn</IconWithText>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Banner;
