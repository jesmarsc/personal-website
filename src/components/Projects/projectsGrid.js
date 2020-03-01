import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

import classes from './projectsGrid.module.scss';

const ProjectsGrid = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { fields: frontmatter___title }) {
        nodes {
          frontmatter {
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 512) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const nodes = data.allMarkdownRemark.nodes;

  return (
    <div className={classes.grid}>
      {nodes.map(({ frontmatter: { path, title, featuredImage } }) => {
        return (
          <Link key={title} to={path} className={classes.item}>
            <Img
              fluid={featuredImage.childImageSharp.fluid}
              style={{ minHeight: '100%' }}
            />
            <h3>{title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
