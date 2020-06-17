import React from 'react';
import { hot } from 'react-hot-loader/root';
import HomePage from '@components/home-page';
import Header from '@components/header';

import './index.less';

const Home = (props: any) => {
  return (
    <>
      <Header text="首页" />
      <HomePage />
    </>
  );
};
export default hot(Home);
