import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as classes from './ProjectsGrid.module.scss';

const ProjectsGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___title }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const nodes = data.allMdx.nodes;

  return (
    <div className={classes.grid}>
      {nodes.map(
        ({
          id,
          fields: { slug },
          frontmatter: { title, featuredImage }
        }: any) => {
          const image = getImage(featuredImage);

          return (
            <Link key={id} to={slug} className={classes.item}>
              {image && <GatsbyImage image={image} alt="NULL" />}
              <h3>{title}</h3>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default ProjectsGrid;
