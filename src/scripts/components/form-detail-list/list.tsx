import React from 'react';
import { Row } from 'antd';
import './index.less';

const DetailList = ({
  col = 3,
  title,
  children,
  gutter = 32,
  ...restProps
}) => {
  const column = col > 4 ? 4 : col;
  return (
    <div className="form-detail-list" {...restProps}>
      {title && <div className="form-detail-list-title">{title}</div>}
      <Row gutter={gutter}>
        {React.Children.map(
          children, // cloeElement 为了改变child 的属性
          child => (child ? React.cloneElement(child, { column }) : child)
        )}
      </Row>
    </div>
  );
};

export default DetailList;
