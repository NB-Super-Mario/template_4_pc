import moment from 'moment';

import {
  getStorage,
  setStorage,
  setSession,
  getSession,
  removeSession,
} from './storage';

export { default as getScroll } from './getScroll';
export { default as addEventListener } from './addEventListener';

export const trim = (str: string) => {
  return str.replace(/^\s+|\s+$/gm, '');
};
export const getUrlParam = (name: string) => {
  // 给定URL参数名称取得对应的参数
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  if (reg.test(window.location.search.substr(1))) {
    return decodeURIComponent(RegExp.$2);
  }
  if (
    reg.test(window.location.hash.substr(window.location.hash.indexOf('?') + 1))
  ) {
    return decodeURIComponent(RegExp.$2);
  }
  return '';
};

export const generateCallbackUrl = (param: string) => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  const path = window.location.pathname;

  return path.includes(param)
    ? `${protocol}//${host}${path}`
    : `${protocol}//${host}${path}${param}`;
};

export const getHostName = () => {
  return `${window.location.protocol}//${window.location.host}`;
};

export const getFormatTelphone = (num: string) => {
  num = num.replace(/\D/g, '').substring(0, 11);
  const valueLen = num.length;
  if (valueLen > 3 && valueLen < 8) {
    num = `${num.substr(0, 3)} ${num.substr(3)}`;
  } else if (valueLen >= 8) {
    num = `${num.substr(0, 3)} ${num.substr(3, 4)} ${num.substr(7)}`;
  }
  return num;
};

const WAP_CITY_LIST_KEY = 'WAP_CITY_LIST_KEY';
const WAP_CITY_TIMESTAMP_KEY = 'WAP_CITY_TIMESTAMP_KEY';
const WAP_CURRENT_CITY_KEY = 'WAP_CURRENT_CITY_KEY';
export const getCityListByStorage = () => {
  return getStorage(WAP_CITY_LIST_KEY);
};

export const setCityListByStorage = cityList => {
  setStorage(WAP_CITY_LIST_KEY, cityList);
};

export const getCityTimestampByStorage = () => {
  return getStorage(WAP_CITY_TIMESTAMP_KEY);
};

export const setCityTimestampByStorage = timestamp => {
  setStorage(WAP_CITY_TIMESTAMP_KEY, timestamp);
};

export const getCityTimestampBySessionStorage = () => {
  return getSession(WAP_CITY_TIMESTAMP_KEY);
};

export const setCityTimestampBySessionStorage = timestamp => {
  setSession(WAP_CITY_TIMESTAMP_KEY, timestamp);
};

export const setSessionCurrentCity = currentCity => {
  setSession(WAP_CURRENT_CITY_KEY, currentCity);
};
export const getSessionCurrentCity = () => {
  return getSession(WAP_CURRENT_CITY_KEY);
};
export const removeSessionCurrentCity = () => {
  return removeSession(WAP_CURRENT_CITY_KEY);
};
export const getHeightWidth = ele => {
  const styles = this.currentStyle
    ? this.currentStyle
    : window.getComputedStyle(this, null);
  return {
    height: styles.height,
    width: styles.width,
  };
};

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(
        moment(
          `${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`
        ).valueOf() - 1000
      ),
    ];
  }

  const year = now.getFullYear();
  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
}

export const encodeBase64 = (data: Object) => {
  try {
    return data ? Base64.encode(JSON.stringify(data)) : '';
  } catch (error) {
    return '';
  }
};
export const decodeBase64 = (base64Str: string) => {
  try {
    return base64Str ? JSON.parse(Base64.decode(base64Str)) : null;
  } catch (error) {
    return null;
  }
};

export const getCookie = name => {
  let arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  arr = document.cookie.match(reg);
  if (arr) {
    return unescape(arr[2]);
  } else {
    return null;
  }
};
export const setCookie = (cname, cvalue, exdays) => {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie =
    cname + '=' + cvalue + '; ' + expires + ';Path=/;domain=.demo.com';
};
export const clearCookie = () => {
  let arr = document.cookie.split(';');
  let names: any = [];
  if (arr && arr.length) {
    arr.forEach(item => {
      let name = item.split('=')[0];
      if (name.indexOf('-token') > -1) {
        names.push(name);
      }
    });
  }
  //删除cookie
  names.length &&
    names.forEach(item => {
      setCookie(item, '', -1);
    });
};
