import React, { Fragment, FunctionComponent } from 'react';

import { SidePanel, Navbar } from '@components';
import bannerCover from '@assets/banner.svg';
import * as classes from './Layout.module.scss';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.background}>
        <div
          className={classes.backgroundImage}
          style={{
            backgroundImage: `url(${bannerCover})`
          }}
        />
      </div>
      <div className={classes.foreground}>
        <div className={classes.sidePanel}>
          <SidePanel />
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
