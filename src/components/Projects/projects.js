import React from 'react';
import { SvgGatsby, SvgJava, SvgMysql, SvgReact, SvgSpring } from '../Logos';
import Section from '../section';
import konektCover from '../../assets/konekt-thumb.jpg';
import kubeCover from '../../assets/kube3d-thumb.jpg';
import bannerCover from '../../assets/banner-thumb.jpg';

import styles from './projects.module.scss';

class Projects extends React.Component {
  state = {
    projects: [
      {
        title: 'Kubernetes Konekt',
        cover: konektCover,
        description:
          'A web application that deploys containers to Kubernetes clusters.',
        githubLink: 'https://github.com/jesmarsc/kubernetes-konekt',
        demoLink: 'https://github.com/jesmarsc/kubernetes-konekt',
        builtWith: [SvgJava, SvgSpring, SvgMysql]
      },
      {
        title: 'Kube3D',
        cover: kubeCover,
        description:
          'An android application that creates 3D renderings of Kubernetes clusters.',
        githubLink: '',
        demoLink: '',
        builtWith: [SvgJava]
      },
      {
        title: 'Personal Website',
        cover: bannerCover,
        description:
          "My personal website you're viewing right now! Created to practice React.",
        githubLink: 'https://github.com/jesmarsc/personal-website',
        demoLink: 'https://github.com/jesmarsc/personal-website',
        builtWith: [SvgReact, SvgGatsby]
      }
    ]
  };

  render() {
    const { id } = this.props;
    return (
      <Section id={id} title={'Projects'}>
        <div className={styles.grid}>
          <div className={styles.item}>
            <img src={konektCover} alt="Kubernetes Sharing screenshot" />
            <h3>Kubernetes Cluster Sharing</h3>
          </div>
          <div className={styles.item}>
            <img src={kubeCover} alt="Kubernetes 3D Modeling screenshot" />
            <h3>Kubernetes 3D Modeling</h3>
          </div>
          <div className={styles.item}>
            <img src={bannerCover} alt="Portfolio screenshot" />
            <h3>Portfolio</h3>
          </div>
        </div>
      </Section>
    );
  }
}

export default Projects;
