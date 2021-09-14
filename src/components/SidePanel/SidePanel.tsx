import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import tw, { styled } from 'twin.macro';

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
    <nav tw="sticky top-0 p-4">
      <ul tw="all-child:(py-4 not-first:(border-t border-solid border-highlight))">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
          <ul tw="ml-4 text-base">
            {nodes.map(
              ({ id, fields: { slug }, frontmatter: { title } }: any) => {
                return (
                  <li key={id}>
                    <NavLink to={slug}>{title}</NavLink>
                  </li>
                );
              }
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

const NavLink = styled(Link).attrs((props) => ({
  activeStyle: tw`text-highlight`
}))(tw`transition-colors hover:(text-highlight)`);

export default SidePanel;
