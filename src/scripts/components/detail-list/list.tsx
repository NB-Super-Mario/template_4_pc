import React from 'react';
import { Row } from 'antd';
import DetailItem from './item';

import './index.less';

const DetailList = ({
  col = 3,
  title = '',
  justify = 'start',
  children,
  gutter = 32,
  ...restProps
}) => {
  const column = col > 6 ? 6 : col;
  return (
    <div className="detail-list" {...restProps}>
      {title && <div className="detail-list-title">{title}</div>}
      <Row gutter={gutter} justify={justify}>
        {React.Children.map(
          children, // cloeElement 为了改变child 的属性
          child => (child ? React.cloneElement(child, { column }) : child)
        )}
      </Row>
    </div>
  );
};
DetailList.DetailItem = DetailItem;
export default DetailList;
