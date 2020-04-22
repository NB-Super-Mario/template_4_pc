import { LocationChangeType } from '../constants/index';
import { log } from '@util/m-track';

const initState = {};

const routerLog = (
  state = initState,
  action: { type: string; payload: any }
) => {
  let pathname;
  let moduleName;
  let matchs;
  switch (action.type) {
    case LocationChangeType.LOCATION_CHANGE:
      if (action?.payload?.location?.pathname) {
        pathname = action.payload.location.pathname;
        matchs = pathname.match(/^\/(\w*)\/?.*$/);
        if (matchs) {
          moduleName = matchs[1];
          console.log(`路由统计`, `模块:${moduleName}`, `${pathname}`);
          log(`路由统计`, `模块:${moduleName}`, `${pathname}`);
        }
      }

      return state;
    default:
  }
  return state;
};
export default routerLog;
