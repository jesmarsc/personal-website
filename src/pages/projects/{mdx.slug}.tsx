import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaCode, FaPlayCircle } from 'react-icons/fa';

import { IconWithText, Layout, SEO } from '@components';
import '@styles/reset.scss';
import * as classes from './project.module.scss';

const ProjectTemplate = ({ data }: any) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, github, website, technologies } = frontmatter;
  const image = getImage(frontmatter.featuredImage);

  return (
    <Fragment>
      {/* <SEO title={title} path={path} /> */}
      <Layout>
        {image && (
          <GatsbyImage className={classes.image} image={image} alt="NULL" />
        )}
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
          {technologies.map((technology: any) => {
            return (
              <li key={technology} className={classes.technology}>
                {technology}
              </li>
            );
          })}
        </ul>

        <MDXRenderer>{body}</MDXRenderer>
      </Layout>
    </Fragment>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        github
        website
        technologies
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default ProjectTemplate;
