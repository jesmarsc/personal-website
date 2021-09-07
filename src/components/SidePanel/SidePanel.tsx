import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import * as classes from './SidePanel.module.scss';

const SidePanel = () => {
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
          }
        }
      }
    }
  `);

  const nodes = data.allMdx.nodes;

  return (
    <div className={classes.sidePanel}>
      <nav>
        <ul className={classes.sidePanel__menu}>
          <li>
            <Link to="/" activeClassName={classes.activeLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={classes.activeLink}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" activeClassName={classes.activeLink}>
              Projects
            </Link>
            <ul className={classes.sidePanel__projects}>
              {nodes.map(
                ({ id, fields: { slug }, frontmatter: { title } }: any) => {
                  return (
                    <li key={id}>
                      <Link to={slug} activeClassName={classes.activeLink}>
                        {title}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidePanel;
