import React from 'react';
import * as classes from './IconWithText.module.scss';

const IconWithText = ({ component, className, style, children }: any) => {
  const Component = component;
  return (
    <div className={className} style={style}>
      <Component className={classes.icon} />
      <p className={classes.text}>{children}</p>
    </div>
  );
};

export default IconWithText;
