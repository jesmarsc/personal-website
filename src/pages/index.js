import React, { Fragment } from 'react';
import { Banner, SEO } from '@components';

import '@styles/reset.scss';

require('typeface-ubuntu');

export default () => (
  <Fragment>
    <SEO />
    <Banner />
  </Fragment>
);
