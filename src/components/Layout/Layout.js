import React, { Fragment } from 'react';

import { SidePanel } from '@components';
import bannerCover from '@assets/banner.svg';
import classes from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className={classes.background}>
        <div
          className={classes.backgroundImage}
          style={{
            backgroundImage: `url(${bannerCover})`
          }}
        />
      </div>
      <div className={classes.foreground}>
        <SidePanel />
        <div className={classes.content}>{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
