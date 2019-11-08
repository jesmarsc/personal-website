import React from 'react';
import {
  IconText,
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
    color: 'white',
    fontSize: '2rem',
    fontFamily: 'Ubuntu'
  };
  return (
    <Section id={id} title="Skills">
      <div className={classes.skills}>
        <div className={classes.skill}>
          <h3>Front-End</h3>
          <div className={classes.column}>
            <IconText style={iconStyle} component={SvgReact}>
              React
            </IconText>
            <IconText style={iconStyle} component={SvgGatsby}>
              Gatsby
            </IconText>
          </div>
        </div>

        <div className={classes.skill}>
          <h3>Back-End</h3>
          <div className={classes.column}>
            <IconText style={iconStyle} component={SvgJava}>
              Java
            </IconText>
            <IconText style={iconStyle} component={SvgSpring}>
              Spring
            </IconText>
            <IconText style={iconStyle} component={SvgMysql}>
              MySQL
            </IconText>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default skills;
