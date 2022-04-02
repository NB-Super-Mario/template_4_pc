import { Divider } from 'antd';
import PageHeader from '../page-header';
import From from './form';
import './index.less';

const FormDemo = () => (
  <div className="form-demo">
    <PageHeader titleText="分配客户经理" />
    <Divider />
    <From />
  </div>
);

export default FormDemo;
