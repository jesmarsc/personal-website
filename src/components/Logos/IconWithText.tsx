import React, { FunctionComponent } from 'react';
import 'twin.macro';

const IconWithText: FunctionComponent<{ icon: any }> = ({ icon, children }) => {
  const Icon = icon;
  return (
    <span tw="flex items-center svg:(mr-2)">
      <Icon />
      <p>{children}</p>
    </span>
  );
};

export default IconWithText;
