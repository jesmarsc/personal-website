import React from 'react';
import {
  SvgGatsby,
  SvgJava,
  SvgMysql,
  SvgReact,
  SvgSpring,
  SvgJavascript,
  SvgNode,
  SvgFirebase,
  SvgMobx,
  SvgKubernetes
} from '@components/Logos';
import { IconWithText } from '@components';

import Section from '../section';
import classes from './skills.module.scss';

const skills = ({ id }) => {
  const iconStyle = {
    display: 'inline-block',
    color: 'white',
    fontSize: '2.2rem',
    margin: '0 16px'
  };
  return (
    <Section id={id} title="Skills">
      <div className={classes.skills}>
        <div className={classes.skill}>
          <h3>Languages</h3>
          <div className={classes.icons}>
            <IconWithText style={iconStyle} component={SvgJavascript}>
              JavaScript
            </IconWithText>
            <IconWithText style={iconStyle} component={SvgJava}>
              Java
            </IconWithText>
          </div>
        </div>
        <div className={classes.skill}>
          <h3>Front-End</h3>
          <div className={classes.icons}>
            <IconWithText style={iconStyle} component={SvgReact}>
              React
            </IconWithText>
            <IconWithText style={iconStyle} component={SvgGatsby}>
              Gatsby
            </IconWithText>
            <IconWithText style={iconStyle} component={SvgMobx}>
              MobX
            </IconWithText>
          </div>
        </div>
        <div className={classes.skill}>
          <h3>Back-End</h3>
          <div className={classes.icons}>
            <IconWithText style={iconStyle} component={SvgNode}>
              Node.js
            </IconWithText>
            <IconWithText style={iconStyle} component={SvgFirebase}>
              Firebase
            </IconWithText>

            <IconWithText style={iconStyle} component={SvgSpring}>
              Spring
            </IconWithText>
            <IconWithText style={iconStyle} component={SvgMysql}>
              MySQL
            </IconWithText>
            <IconWithText style={iconStyle} component={SvgKubernetes}>
              Kubernetes
            </IconWithText>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default skills;
