import React from 'react';
import { Button } from 'antd';
import history from '@routes/history';

import './index.less';
const goToDetail = (): void => history.push('/home/detail');

const HomePage = (props: any) => {
  return (
    <div className="home-page">
      <h1>NB-Super-Mario</h1>
      <h2>template_4_pc</h2>
      <Button type="default" onClick={goToDetail}>
        详情页面
      </Button>
    </div>
  );
};
export default HomePage;
