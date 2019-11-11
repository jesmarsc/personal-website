import React, { Fragment } from 'react';
import Modal from 'react-modal';
import Section from '../section';
import ProjectCard from './projectCard';
import konektCover from '../../assets/konekt-thumb.jpg';
import kubeCover from '../../assets/kube3d-thumb.jpg';
import bannerCover from '../../assets/banner-thumb.jpg';

import styles from './projects.module.scss';

const customStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10
  }
};

const kubekoDescription = (
  <Fragment>
    <div className={styles.part}>
      <h2 className={styles.version}>v1</h2>
      <p className={styles.description}>
        A web application built to help people start using Kubernetes without
        having to worry about setting up clusters! Other users who already have
        clusters running can share them with us, allowing people to deploy
        resources onto their cluster.
      </p>
    </div>
    <div className={styles.divider} />
    <div className={styles.part}>
      <h2 className={styles.version}>v2</h2>
      <p className={styles.description}>
        A complete rewrite from scratch! But now using a React with a Node.js
        backend! Major changes to the way users are authenticated with a cluster
        by now using JSON web tokens and OpenID Connect.
      </p>
    </div>
  </Fragment>
);

const kube3dDescription = (
  <Fragment>
    <div className={styles.part}>
      <h2 className={styles.version}>v1</h2>
      <p className={styles.description}>
        A mobile application that helps people visualize their cluster and at a
        glance be able to examine what is happening. This is also a helpful tool
        for new users of Kubernetes to visually how a Kubernetes cluster works.
      </p>
    </div>
    <div className={styles.divider} />
    <div className={styles.part}>
      <h2 className={styles.version}>v2</h2>
      <span className={styles.description}>
        Another complete rewrite from scratch! The idea was to expand the
        platforms this worked on by bringing it to the web with React and
        Babylon.js
      </span>
    </div>
  </Fragment>
);

const portfolioDescription = (
  <Fragment>
    <div className={styles.part}>
      <h2 className={styles.version}>v1</h2>
      <p className={styles.description}>
        The website you're on right now! Started when I was learning React as a
        way to get practice and display the projects I've worked on. All of it
        has been built with custom CSS as well!
      </p>
    </div>
  </Fragment>
);

class Projects extends React.Component {
  state = {
    modalIsOpen: false,
    selectedProject: 0,
    projects: [
      {
        title: 'Kubernetes Cluster Sharing',
        cover: konektCover,
        tools: ['React', 'Firebase', 'Node.js', 'Express', 'Spring', 'MySQL'],
        description: kubekoDescription,
        githubLink: 'https://github.com/jesmarsc/kubernetes-konekt',
        demoLink: 'https://github.com/jesmarsc/kubernetes-konekt'
      },
      {
        title: 'Kubernetes 3D Modeling',
        cover: kubeCover,
        tools: ['React', 'Babylon.js', 'Android', 'Unity'],
        description: kube3dDescription,
        githubLink: '',
        demoLink: ''
      },
      {
        title: 'Portfolio',
        cover: bannerCover,
        tools: ['React', 'Gatsby', 'SASS'],
        description: portfolioDescription,
        githubLink: 'https://github.com/jesmarsc/personal-website',
        demoLink: 'https://github.com/jesmarsc/personal-website'
      }
    ]
  };

  openModal = index => {
    this.setState({ modalIsOpen: true, selectedProject: index });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { modalIsOpen, selectedProject, projects } = this.state;
    const { title, cover, tools, description } = projects[selectedProject];
    const { id } = this.props;

    const card = (
      <ProjectCard tools={tools} title={title} image={cover}>
        {description}
      </ProjectCard>
    );
    return (
      <Section id={id} title={'Projects'}>
        <Modal
          className={{ base: styles.base }}
          style={customStyle}
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
        >
          {card}
        </Modal>
        <div className={styles.grid}>
          <button onClick={() => this.openModal(0)} className={styles.item}>
            <img src={konektCover} alt="Kubernetes Sharing screenshot" />
            <h3>Kubernetes Cluster Sharing</h3>
          </button>
          <button onClick={() => this.openModal(1)} className={styles.item}>
            <img src={kubeCover} alt="Kubernetes 3D Modeling screenshot" />
            <h3>Kubernetes 3D Modeling</h3>
          </button>
          <button onClick={() => this.openModal(2)} className={styles.item}>
            <img src={bannerCover} alt="Portfolio screenshot" />
            <h3>Portfolio</h3>
          </button>
        </div>
      </Section>
    );
  }
}

export default Projects;
