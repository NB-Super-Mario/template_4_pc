import React from 'react';
import { hot } from 'react-hot-loader/root';
import history from '@routes/history';
import { Button, DatePicker } from 'antd';

import moment from 'moment';

import './index.less';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const Detail = () => (
  <div>
    <Button onClick={() => history.goBack()}>返回</Button>
    <div>
      <DatePicker
        defaultValue={moment('2015/01/01', dateFormat)}
        format={dateFormat}
      />
      <br />
      <DatePicker
        defaultValue={moment('01/01/2015', dateFormatList[0])}
        format={dateFormatList}
      />
      <br />
      <DatePicker
        defaultValue={moment('2015/01', monthFormat)}
        format={monthFormat}
        picker="month"
      />
      <br />
      <RangePicker
        defaultValue={[
          moment('2015/01/01', dateFormat),
          moment('2015/01/01', dateFormat),
        ]}
        format={dateFormat}
      />
    </div>
  </div>
);

export default hot(Detail);
