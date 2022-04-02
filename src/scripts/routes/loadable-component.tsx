import Loadable from 'react-loadable';

import Loading from '@components/loading';

const LoadingComponent = () => <Loading type={Loading.BG_TYPE} visable fixed />;

const LoadableComponent = (
  loader: any,
  opts?:
    | Loadable.OptionsWithoutRender<unknown>
    | Loadable.OptionsWithRender<unknown, object>
    | undefined
) => () =>
  Loadable({
    loader,
    delay: 200,
    timeout: 10000,
    loading: LoadingComponent,
    ...opts,
  });
export default LoadableComponent;

/* 
使用实例
import LoadableComponent from './loadable-component';

const LoadableMyComponent = LoadableComponent({
  loader: () => import('./MyComponent'),
});

export defauwlt class App extends React.Component {
  render() {
    return <LoadableMyComponent/>;
  }
} 
*/
