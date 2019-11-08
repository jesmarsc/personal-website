import React, { Component } from 'react';
import Section from '../section';

import styles from './AboutMe.module.scss';

class AboutMe extends Component {
  state = {
    output: '',
    currentIndex: 0,
    words: ['websites', 'video_games', 'applications']
  };

  componentDidMount() {
    this.type();
  }

  componentWillUnmount() {
    clearTimeout(this.addCharactersInterval);
    clearTimeout(this.removeCharactersInterval);
  }

  type = () => {
    const { currentIndex, words } = this.state;
    const currentWord = words[currentIndex];

    let length = 0;
    this.addCharactersInterval = setInterval(() => {
      if (length === currentWord.length - 1) {
        this.timeoutFunctionCall(() => this.erase());
        clearInterval(this.addCharactersInterval);
      }
      this.setState(prevState => {
        const newWord = prevState.output + currentWord.charAt(length);
        return { output: newWord };
      });
      length++;
    }, 100);
  };

  erase = () => {
    const { currentIndex, words } = this.state;
    const currentWord = words[currentIndex];

    let length = currentWord.length;
    this.removeCharactersInterval = setInterval(() => {
      if (length === 0) {
        this.setState(prevState => {
          const { currentIndex, words } = prevState;
          return { currentIndex: (currentIndex + 1) % words.length };
        });
        this.type();
        clearInterval(this.removeCharactersInterval);
      }
      this.setState(prevState => {
        const newWord = prevState.output.slice(0, length);
        return { output: newWord };
      });
      length--;
    }, 25);
  };

  timeoutFunctionCall = callback => {
    setTimeout(() => callback(), 1000);
  };

  render() {
    const { output } = this.state;
    return (
      <Section id={this.props.id} title="About Me">
        <div className={styles.container}>
          <p className={styles.description}>
            During my free time I like to{' '}
            <span className={styles.decoration}>build ./</span>
            <span className={styles.output}>{output}</span>
            <span className={styles.blinking}>|</span>
          </p>
          <p className={styles.description}>
            I'm currently studying
            <span className={styles.output}> web development </span>
            and
            <span className={styles.output}> cloud technologies</span>!
          </p>
        </div>
      </Section>
    );
  }
}

export default AboutMe;
