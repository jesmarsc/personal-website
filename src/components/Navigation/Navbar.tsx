import React from 'react';
import { Link } from 'gatsby';
import { FaHome, FaUserCircle, FaCode } from 'react-icons/fa';

import * as classes from './Navbar.module.scss';

const navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <li>
          <Link
            to="/"
            className={classes.menu__link}
            activeClassName={classes.active}
          >
            <FaHome className={classes.menu__linkIcon} />
            <p className={classes.menu__linkText}>Home</p>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={classes.menu__link}
            activeClassName={classes.active}
          >
            <FaUserCircle className={classes.menu__linkIcon} />
            <p className={classes.menu__linkText}>About Me</p>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={classes.menu__link}
            activeClassName={classes.active}
          >
            <FaCode className={classes.menu__linkIcon} />
            <p className={classes.menu__linkText}>Projects</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
