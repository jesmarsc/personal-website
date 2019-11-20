import React from 'react';
import Modal from 'react-modal';

import { Kube3dCard, KubekoCard, PortfolioCard } from './Cards';
import Section from '@components/section';
import konektCover from '@assets/konekt-thumb.jpg';
import kubeCover from '@assets/kube3d-thumb.jpg';
import bannerCover from '@assets/banner-thumb.jpg';

import styles from './projects.module.scss';
import './projects.css';

const customStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10
  }
};

const cardReducer = type => {
  switch (type) {
    case 0:
      return <KubekoCard />;
    case 1:
      return <Kube3dCard />;
    case 2:
      return <PortfolioCard />;
    default:
      return null;
  }
};

class Projects extends React.Component {
  state = {
    modalIsOpen: false,
    selectedProject: 0
  };

  componentDidMount() {
    Modal.setAppElement(document.getElementById('___gatsby'));
  }

  openModal = index => {
    this.setState({ modalIsOpen: true, selectedProject: index });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { modalIsOpen, selectedProject } = this.state;
    const { id } = this.props;

    const card = cardReducer(selectedProject);
    return (
      <Section id={id} title={'Projects'}>
        <Modal
          className={{
            base: styles.base,
            afterOpen: styles.afterOpen,
            beforeClose: styles.beforeClose
          }}
          style={customStyle}
          closeTimeoutMS={100}
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
            <img src={kubeCover} alt="Kubernetes 3D Renderer screenshot" />
            <h3>Kubernetes 3D Renderer</h3>
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
