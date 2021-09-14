import React, { FunctionComponent } from 'react';
import 'twin.macro';

import { SidePanel, Navbar } from 'src/components';
import bannerCover from 'src/assets/banner.svg';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div tw="font-family[Ubuntu]">
      <div
        tw="fixed inset-0 bg-cover bg-center blur z-index[-1]"
        style={{
          backgroundImage: `url(${bannerCover})`
        }}
      />

      <div tw="flex mx-auto max-w-5xl min-h-screen text-base text-white bg-black bg-opacity-70">
        <div tw="hidden md:block w-64 flex-shrink-0 border-r border-solid border-highlight">
          <SidePanel />
        </div>

        <div tw="p-4">{children}</div>
      </div>

      <div tw="sticky bottom-0 md:hidden">
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
