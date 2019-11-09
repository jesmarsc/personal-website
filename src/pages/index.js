import React, { Fragment } from 'react';
import { Banner, Navbar, Projects, Skills, AboutMe } from '../components';
import { Helmet } from 'react-helmet';

import '../styles/reset.scss';

require('typeface-ubuntu');

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="Description"
        content="Jesmar Castillo personal website and portfolio"
      />
      <title>Jesmar Castillo</title>
      <html lang="en" />
      <style>{'body { background-color: #272262; }'}</style>
    </Helmet>
    <Banner />
    <Navbar />
    <AboutMe id="about" />
    <Projects id="projects" />
    <Skills id="skills" />
    <footer
      style={{
        color: 'white',
        margin: '32px',
        display: 'block',
        textAlign: 'center',
        fontSize: '1.4rem'
      }}
    >
      © 2019 Jesmar Castillo - Built with React and Gatsby.
    </footer>
  </Fragment>
);
