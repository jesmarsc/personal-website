import React from 'react';
import { Link } from 'gatsby';
import { FaCode, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import tw, { styled } from 'twin.macro';

import bannerCover from 'src/assets/banner.svg';

const Banner = () => {
  return (
    <div
      tw="w-full h-screen flex flex-col items-center justify-center font-family['Ubuntu'] text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerCover})`
      }}
    >
      <h1 tw="font-size[min(20vw, 10rem)] font-bold leading-none select-none">
        Jesmar
      </h1>
      <nav tw="text-lg">
        <ul tw="grid gap-x-2 grid-cols-2 sm:grid-cols-4">
          <li>
            <LocalLink to="/projects">
              <FaCode />
              <span>Projects</span>
            </LocalLink>
          </li>
          <li>
            <ExternalLink
              href={'./jesmar-castillo-resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf />
              <span>Resume</span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://github.com/jesmarsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>Github</span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://www.linkedin.com/in/jesmar-castillo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </ExternalLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const ExternalLink = styled('a')(() => [
  tw`flex items-center justify-center py-2 px-4 rounded svg:mr-2`,
  tw`transition-colors hover:(text-highlight bg-primary)`
]);
const LocalLink = ExternalLink.withComponent(Link);

export default Banner;
