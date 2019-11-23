import React from 'react';
import ProjectCard from '../projectCard';
import bannerCover from '@assets/portfolio-thumb.jpg';

import styles from './Description.module.scss';

const config = {
  image: bannerCover,
  title: 'Portfolio',
  tools: ['React', 'Gatsby'],
  github: 'https://github.com/jesmarsc/personal-website',
  demo: 'https://jesmar.info/'
};

const PortfolioCard = () => {
  return (
    <ProjectCard {...config}>
      <div className={styles.part}>
        <h2 className={styles.version}>v1</h2>
        <p>
          The website you're viewing right now! It started as a way to learn
          React and display the projects I've worked on. Everything you see here
          has been built with custom React components and CSS.
        </p>
      </div>
    </ProjectCard>
  );
};

export default PortfolioCard;
