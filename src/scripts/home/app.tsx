import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import BaseRouter from '@routes/index';
import history from '@routes/history';
import configureStore from '../store';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './index.less';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const store = configureStore({});
const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <ConnectedRouter history={history}>
          <BaseRouter />
        </ConnectedRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </ConfigProvider>
    </Provider>
  </QueryClientProvider>
);

export default App;
