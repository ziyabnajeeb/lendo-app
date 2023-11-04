import React from 'react';
import { Outlet } from 'react-router-dom';

import { About } from '../../pages';

const AboutLayout = () => {
  return (
    <>
      <About />
      <Outlet />
    </>
  );
};

export default AboutLayout;
