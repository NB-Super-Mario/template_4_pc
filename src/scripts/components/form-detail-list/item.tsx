import { Col } from 'antd';
import responsive from '../responsive';
import './index.less';

const FormDetailItem = ({
  title,
  isRequired,
  column,
  children,
  ...restProps
}) => (
  <Col {...responsive[column]} {...restProps} className="form-detail-item">
    {children && <div className="form-detail-item-detail">{children}</div>}
  </Col>
);

export default FormDetailItem;
