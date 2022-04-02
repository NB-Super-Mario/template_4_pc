import { Col } from 'antd';
import responsive from '../responsive';
import './index.less';

const DetailItem = ({
  title = '',
  isRequired = false,
  column = 3,
  children,
  ...restProps
}) => (
  <Col {...responsive[column]} {...restProps} className="detail-item">
    {title && (
      <div className="detail-item-title">
        {isRequired && <em className="required">*</em>}
        {title}
      </div>
    )}
    {children && <div className="detail-item-detail">{children}</div>}
  </Col>
);

export default DetailItem;
