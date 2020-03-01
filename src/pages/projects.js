import React, { Fragment } from 'react';

import { Layout, SEO, ProjectsGrid } from '@components';

const projects = () => {
  return (
    <Fragment>
      <SEO title={'Projects'} path={'/projects'} />
      <Layout>
        <h1 style={{ margin: '16px 0px', textAlign: 'center' }}>Projects</h1>
        <ProjectsGrid />
      </Layout>
    </Fragment>
  );
};

export default projects;
