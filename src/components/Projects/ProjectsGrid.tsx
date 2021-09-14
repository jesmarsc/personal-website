import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'twin.macro';

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
    <div tw="grid gap-4 grid-template-columns[repeat(auto-fit, minmax(18rem, 1fr))]">
      {nodes.map(
        ({
          id,
          fields: { slug },
          frontmatter: { title, featuredImage }
        }: any) => {
          const image = getImage(featuredImage);

          return (
            <Link
              tw="relative rounded overflow-hidden border-4 border-solid border-primary-dark text-lg transition-shadow hover:(shadow-highlight)"
              key={id}
              to={slug}
            >
              {image && (
                <GatsbyImage tw="h-full w-full" image={image} alt="NULL" />
              )}
              <h3 tw="absolute top-0 px-4 py-1 bg-primary-dark rounded-br-xl">
                {title}
              </h3>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default ProjectsGrid;
