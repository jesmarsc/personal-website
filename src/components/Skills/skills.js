import React from 'react';
import {
  IconWithText,
  SvgGatsby,
  SvgJava,
  SvgMysql,
  SvgReact,
  SvgSpring
} from '../Logos';

import Section from '../section';
import classes from './skills.module.scss';

const skills = ({ id }) => {
  const iconStyle = {
    display: 'inline-block',
    color: 'white',
    fontSize: '4rem',
    margin: '0 16px'
  };
  return (
    <Section id={id} title="Skills">
      <div className={classes.skills}>
        <div className={classes.skill}>
          <h3>Front-End</h3>
          <div className={classes.icons}>
            <IconWithText style={iconStyle} component={SvgReact}>
              React
            </IconWithText>
            <IconWithText style={iconStyle} component={SvgGatsby}>
              Gatsby
            </IconWithText>
          </div>
        </div>

        <div className={classes.skill}>
          <h3>Back-End</h3>
          <div className={classes.icons}>
            <IconWithText style={iconStyle} component={SvgJava}>
              Java
            </IconWithText>
            <IconWithText style={iconStyle} component={SvgSpring}>
              Spring
            </IconWithText>
            <IconWithText style={iconStyle} component={SvgMysql}>
              MySQL
            </IconWithText>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default skills;
