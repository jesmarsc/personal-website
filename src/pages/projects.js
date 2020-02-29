import React, { Fragment } from 'react';

import { Layout, SEO, ProjectsGrid } from '@components';

const projects = () => {
  return (
    <Fragment>
      <SEO title={'Projects'} path={'/projects'} />
      <Layout>
        <ProjectsGrid />
      </Layout>
    </Fragment>
  );
};

export default projects;
