import React, { Fragment } from 'react';
import 'twin.macro';

import { Layout, SEO, ProjectsGrid } from '@components';

const Projects = () => {
  return (
    <Fragment>
      <SEO title={'Projects'} path={'/projects'} />
      <Layout>
        <h1 tw="text-center text-4xl font-bold m-4">Projects</h1>
        <ProjectsGrid />
      </Layout>
    </Fragment>
  );
};

export default Projects;
