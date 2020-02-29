import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaCode, FaPlayCircle } from 'react-icons/fa';

import { IconWithText, Layout, SEO } from '@components';
import '@styles/reset.scss';
import classes from './ProjectTemplate.module.scss';

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, path, github, website, description } = frontmatter;
  const featuredFluidImage = frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Fragment>
      <SEO title={title} path={path} />
      <Layout>
        <Img className={classes.image} fluid={featuredFluidImage} />
        <h1 className={classes.content__title}>{title}</h1>
        <nav className={classes.links}>
          <ul>
            {github && (
              <li className={classes.link}>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.button}
                >
                  <IconWithText component={FaCode}> Code</IconWithText>
                </a>
              </li>
            )}
            {website && (
              <li className={classes.link}>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.button}
                >
                  <IconWithText component={FaPlayCircle}> Demo</IconWithText>
                </a>
              </li>
            )}
          </ul>
        </nav>
        <ul className={classes.technologies}>
          {frontmatter.technologies.map(technology => {
            return (
              <li key={technology} className={classes.technology}>
                {technology}
              </li>
            );
          })}
        </ul>
        <div
          className={classes.content__markdown}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    </Fragment>
  );
};

export default ProjectTemplate;
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        github
        website
        technologies
        title
        path
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
