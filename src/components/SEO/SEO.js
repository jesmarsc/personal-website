import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, path }) => {
  const {
    site: {
      siteMetadata: { defaultTitle, titleTemplate, defaultDescription, siteUrl }
    }
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
        }
      }
    }
  `);

  const seo = {
    title: title || defaultTitle,
    titleTemplate: title ? titleTemplate : '',
    description: description || defaultDescription,
    url: new URL(path || '', siteUrl)
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      <style>{'body { background-color: #272262;'}</style>
    </Helmet>
  );
};

export default SEO;

SEO.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string
};

SEO.defaultProps = {
  title: null,
  description: null,
  path: null
};
