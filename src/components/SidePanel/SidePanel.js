import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import classes from './SidePanel.module.scss';

const SidePanel = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___title }) {
        nodes {
          frontmatter {
            title
            path
          }
        }
      }
    }
  `);

  return (
    <div className={classes.sidePanel}>
      <nav>
        <ul className={classes.sidePanel__menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
            <ul className={classes.sidePanel__projects}>
              {data.allMarkdownRemark.nodes.map((node, index) => {
                const {
                  frontmatter: { title, path }
                } = node;
                return (
                  <li key={title}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidePanel;
