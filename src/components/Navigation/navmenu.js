import React from 'react';
import { Link } from 'gatsby';

import classes from './navmenu.module.scss';

export const Navmenu = ({ className }) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <li>
          <Link
            to="/"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navmenu;
