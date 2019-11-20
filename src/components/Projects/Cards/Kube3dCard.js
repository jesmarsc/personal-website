import React from 'react';
import ProjectCard from '../projectCard';
import kubeCover from '@assets/kube3d-thumb.jpg';

import styles from './Description.module.scss';

const config = {
  image: kubeCover,
  title: 'Kubernetes 3D Renderer',
  tools: ['React', 'Babylon.js', 'Android', 'Unity'],
  github: 'https://github.com/jesmarsc/kube3d',
  demo: 'https://kube3d.netlify.com/'
};

const Kube3dCard = () => {
  return (
    <ProjectCard {...config}>
      <div className={styles.part}>
        <h2 className={styles.version}>v1</h2>
        <p>
          An Android application that helps people visualize their cluster and
          be able to examine what is happening. This also serves as a helpful
          tool for new Kubernetes users to visually understand how a cluster
          works.
        </p>
      </div>
      <div className={styles.divider} />
      <div className={styles.part}>
        <h2 className={styles.version}>v2</h2>
        <p>
          Another complete rewrite from scratch! The idea was to expand the
          platforms this worked on by bringing it to the web with React and
          Babylon.js
        </p>
      </div>
    </ProjectCard>
  );
};

export default Kube3dCard;
