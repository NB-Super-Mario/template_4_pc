import { Button } from 'antd';
import history from '@routes/history';

import './index.less';

const goToDetail = (): void => history.push('/home/detail');

const Home = (props: any) => {
  return (
    <>
      首页{' '}
      <Button type="primary" onClick={goToDetail}>
        详情页面
      </Button>
    </>
  );
};
export default Home;
