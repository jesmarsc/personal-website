import React, { Fragment } from 'react';
import { GlobalStyles } from 'twin.macro';

import { Banner, SEO } from '@components';

const Home = () => (
  <Fragment>
    <SEO />
    <GlobalStyles />
    <Banner />
  </Fragment>
);

export default Home;
