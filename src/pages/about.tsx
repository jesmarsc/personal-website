import React, { Fragment } from 'react';
import 'twin.macro';

import { Layout, SEO, Skills, About } from 'src/components';

const about = () => {
  return (
    <Fragment>
      <SEO title={'About'} path={'/about'} />
      <Layout>
        <div>
          <h1 tw="text-center text-4xl font-bold m-4">About Me</h1>
          <About />
        </div>

        <div tw="mt-12">
          <h1 tw="text-center text-4xl font-bold m-4">Skills</h1>
          <Skills />
        </div>
      </Layout>
    </Fragment>
  );
};

export default about;
