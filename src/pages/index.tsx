import React, { Fragment } from 'react';
import { Banner, SEO } from '@components';

import '@styles/reset.scss';

const Home = () => (
  <Fragment>
    <SEO />
    <Banner />
  </Fragment>
);

export default Home;
