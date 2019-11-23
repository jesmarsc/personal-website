import React from 'react';
import ProjectCard from '../projectCard';
import konektCover from '@assets/kubeko-thumb.jpg';

import styles from './Description.module.scss';

const config = {
  image: konektCover,
  title: 'Kubernetes Cluster Sharing',
  tools: ['React', 'Firebase', 'Node.js', 'Express', 'Spring', 'MySQL'],
  github: 'https://github.com/jesmarsc/kubeko-frontend',
  demo: 'https://kubeko.netlify.com/'
};

const KubekoCard = () => {
  return (
    <ProjectCard {...config}>
      <div className={styles.part}>
        <h2 className={styles.version}>v1</h2>
        <p>
          A web application built to help people start using Kubernetes without
          having to worry about setting up clusters. Other users who have setup
          clusters can share them with us, allowing people to deploy resources
          onto them.
        </p>
      </div>
      <div className={styles.divider} />
      <div className={styles.part}>
        <h2 className={styles.version}>v2</h2>
        <p>
          A complete rewrite from scratch, but built with React and Node.js.
          Major changes to the way users are authenticated with a cluster were
          made by using JSON web tokens and OpenID Connect.
        </p>
      </div>
    </ProjectCard>
  );
};

export default KubekoCard;
