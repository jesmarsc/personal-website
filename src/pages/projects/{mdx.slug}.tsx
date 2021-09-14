import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import tw, { css, styled } from 'twin.macro';

import { IconWithText, Layout, SEO } from 'src/components';

const ProjectTemplate = ({ data }: any) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title, github, website, technologies } = frontmatter;
  const image = getImage(frontmatter.featuredImage);

  return (
    <Fragment>
      <SEO title={title} />
      <Layout>
        {image && (
          <GatsbyImage
            tw="w-full h-56 rounded-xl border border-solid border-highlight"
            image={image}
            alt="Image for project"
          />
        )}
        <div tw="all-child:(not-first:(mt-1))">
          <h1 tw="text-3xl mt-4 mb-2 font-bold">{title}</h1>

          <ul tw="flex gap-1">
            {github && (
              <li>
                <ExternalLink href={github}>
                  <IconWithText icon={FaExternalLinkAlt}>Code</IconWithText>
                </ExternalLink>
              </li>
            )}
            {website && (
              <li>
                <ExternalLink href={website}>
                  <IconWithText icon={FaExternalLinkAlt}>Demo</IconWithText>
                </ExternalLink>
              </li>
            )}
          </ul>

          <ul tw="flex flex-wrap gap-1">
            {technologies.map((technology: any) => (
              <li tw="bg-primary-dark px-4 py-1 rounded" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <MarkdownContainer>
          <MDXRenderer>{body}</MDXRenderer>
        </MarkdownContainer>
      </Layout>
    </Fragment>
  );
};

const ExternalLink = styled('a').attrs(() => ({
  target: '_blank',
  rel: 'noreferrer noopener'
}))(
  tw`block rounded px-4 py-1 bg-primary-dark transition-shadow hover:shadow-highlight`
);

const MarkdownContainer = styled('div')(
  () =>
    css`
      ${tw`all-child:(my-10)`}

      section {
        ${tw`all-child:(not-first:(my-6))`}
      }

      h2 {
        ${tw`text-2xl font-semibold`}
      }

      h3 {
        ${tw`text-lg font-semibold`}
      }

      h4 {
        ${tw`font-semibold`}
      }

      p {
        ${tw`my-2!`}
      }

      a {
        ${tw`text-highlight`}
      }

      ul {
        ${tw`my-2! ml-4`}
      }
    `
);

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
