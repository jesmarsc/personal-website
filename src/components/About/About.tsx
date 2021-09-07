import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Section } from '@components';
import * as classes from './About.module.scss';

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     imageSharp(fluid: { originalName: { eq: "grad-image.jpg" } }) {
  //       fluid(maxWidth: 800) {
  //         ...GatsbyImageSharpFluid
  //       }
  //     }
  //   }
  // `);
  // const fluid = data.imageSharp.fluid;

  return (
    <Section title={'About Me'}>
      <div className={classes.container}>
        {/* <Img fluid={fluid} className={classes.image} /> */}
        <p className={classes.paragraph}>
          My name is Jesmar Castillo and I'm a software developer from Los
          Angeles, California. I graduated from{' '}
          <span className={classes.highlight}>UC Santa Barbara</span> in June
          2019 with a{' '}
          <span className={classes.highlight}>B.S in Computer Engineering</span>
          . I have a personal interest in web development and cloud
          technologies. I'm heavily dedicated to delivering work that focuses on
          taking complex processes and turning them into simple and enjoyable
          experiences. I'm currently looking for a software engineering position
          in the Los Angeles or Santa Barbara area. If you have any questions,
          please contact me at: <br />
          <span className={classes.highlight}>Email:</span> jesmar@ucsb.edu{' '}
          <br />
          <span className={classes.highlight}>Phone:</span> (818) 376-9341
        </p>
      </div>
    </Section>
  );
};

export default About;
