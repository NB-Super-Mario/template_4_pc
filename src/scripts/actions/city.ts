import ActionTypes from '../constants';
import {
  getCityTimestampByStorage,
  setCityListByStorage,
  setCityTimestampByStorage,
  getCityListByStorage,
  getCityTimestampBySessionStorage,
  setCityTimestampBySessionStorage
} from '@util/index';
import { getCityListApi } from '@api/city';

export const receiveCityList = list => ({
  type: ActionTypes.RECEIVE_CITY_LIST,
  list
});
export const getCityList = poi => async dispatch => {
  let timestamp = getCityTimestampBySessionStorage();
  if (timestamp) {
    dispatch(receiveCityList(getCityListByStorage()));
    return;
  }
  timestamp = getCityTimestampByStorage();
  const result: any = await getCityListApi(timestamp);

  if (
    result.re &&
    result.re.info &&
    result.re.info.citys &&
    result.re.info.timeStamp.city !== timestamp
  ) {
    setCityListByStorage(result.re.info.citys);
    setCityTimestampBySessionStorage(result.re.info.timeStamp.city);
    setCityTimestampByStorage(result.re.info.timeStamp.city);
    dispatch(receiveCityList(result.re.info.citys));
  } else {
    dispatch(receiveCityList(getCityListByStorage()));
  }
};
