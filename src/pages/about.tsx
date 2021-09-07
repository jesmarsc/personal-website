import React, { Fragment } from 'react';

import { Layout, SEO, Skills, About } from '@components';

const about = () => {
  return (
    <Fragment>
      <SEO title={'About'} path={'/about'} />
      <Layout>
        <About />
        <Skills />
      </Layout>
    </Fragment>
  );
};

export default about;
