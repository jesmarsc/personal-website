import React from 'react';
import { Link } from 'gatsby';
import { FaHome, FaUserCircle, FaCode } from 'react-icons/fa';
import tw, { styled } from 'twin.macro';

const Navbar = () => {
  return (
    <nav tw="w-screen text-white text-xs">
      <ul tw="flex justify-evenly bg-primary">
        <li>
          <NavLink to="/">
            <FaHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            <FaCode />
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <FaUserCircle />
            <span>About Me</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const NavLink = styled(Link).attrs(() => ({
  activeStyle: tw`text-highlight`
}))(
  tw`flex flex-col items-center p-2 transition-colors hover:(text-highlight) svg:(text-xl)`
);

export default Navbar;
