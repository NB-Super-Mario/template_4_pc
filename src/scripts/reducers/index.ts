import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import foo from './foo';
import home from './home';
import city from './city';
import form from './form';
import routerLog from './routerLog';

const rootReducer = (history: History) =>
  combineReducers({
    foo,
    home,
    city,
    form,
    routerLog,
    router: connectRouter(history),
    // 会把new 作为 state 一个属性赋值
  });
export default rootReducer;
