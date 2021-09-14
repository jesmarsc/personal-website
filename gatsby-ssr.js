import React from 'react';
import { GlobalStyles } from 'twin.macro';
import '@fontsource/ubuntu';

import './src/styles/reset.scss';

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  );
};
