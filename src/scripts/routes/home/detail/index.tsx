import React from 'react';
import { hot } from 'react-hot-loader/root';
import history from '@routes/history';
import { Button } from 'antd';

import './index.less';

const Detail = () => (
  <div>
    <Button onClick={() => history.goBack()}>返回</Button>
  </div>
);

export default hot(Detail);
