import React, { FunctionComponent } from 'react';
import * as classes from './Section.module.scss';

const Section: FunctionComponent<{ title: string }> = ({ title, children }) => {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
