/// <reference path="ajax.d.ts" />
import axios, { AxiosPromise } from 'axios';
import cookies from 'js-cookie';
import { Modal, message } from 'antd';
import { log } from '@util/m-track';

import qs from 'qs';

message.config({
  top: 80,
  duration: 3,
  maxCount: 1,
});

declare global {
  interface Window {
    isCallNativeLogin: boolean;
  }
}

const _httpClient = axios.create({
  timeout: 20000,
});

const _makeRequest = <T>(
  method: string,
  url: string,
  queryParams?: object,
  body?: object
) => {
  let request: AxiosPromise<T>;
  switch (method) {
    case 'GET':
      request = _httpClient.get<T>(url, { params: queryParams });
      break;
    case 'POST':
      request = _httpClient.post<T>(url, body, { params: queryParams });
      break;
    case 'PUT':
      request = _httpClient.put<T>(url, body, { params: queryParams });
      break;
    case 'PATCH':
      request = _httpClient.patch<T>(url, body, { params: queryParams });
      break;
    case 'DELETE':
      request = _httpClient.delete(url, { params: queryParams });
      break;

    default:
      throw new Error('Method not supported');
  }

  return new Promise((resolve, reject) => {
    request
      .then(async response => {
        const result: any = response.data;
        console.log(result);
        if (result.status === 0) {
          //此处处理不同状态逻辑 例如 ajax 的登录拦截
          resolve(response.data);
        } else if (result.status === 5) {
          location.href = `/login?redirectURL=${encodeURIComponent(
            location.href
          )}`;
        } else {
          message.error(result.msg || '服务请求失败, 请稍后再试!');
          reject(response.data);
        }
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
};

const catchHandle = (e: any, reject: any) => {
  if (e.response && e.response.status) {
    switch (e.response.status) {
      case 401: // 未登录跳转至登录页
        if (cookies.get('mLogoutUrl')) {
          const mLogoutUrl = cookies.get('mLogoutUrl');
          window.location.href = `${mLogoutUrl}`;
          cookies.remove('mLogoutUrl');
        } else {
          top.window.postMessage(
            {
              type: 'NO_LOGIN',
              msg: '401',
            },
            '*'
          );
          top.location.href = `${DOMAIN}`;
        }
        return reject(new Error('未登录，请重新登录'));
      case 403: // 无权限操作
        // top.window.postMessage({
        //   type: 'NO_PERMISSION',
        //   msg: '403'
        // }, '*')
        return reject(new Error('对不起，您暂无操作权限'));
      default:
        break;
    }
  } else {
    Modal.destroyAll();
    Modal.warning({
      title: '登录超时或没有访问权限，请重新登录！',
      okText: '确定',
      keyboard: false,
      onOk() {
        if (cookies.get('mLogoutUrl')) {
          const mLogoutUrl = cookies.get('mLogoutUrl');
          window.location.href = `${mLogoutUrl}`;
          cookies.remove('mLogoutUrl');
        } else {
          window.location.href = LOGIN_DOMAIN;
        }
      },
    });
  }

  reject(e.response);
};
/**
 * get 方式发送请求
 * @param opts ajax 参数
 */
export const getData = (config: any, needLading = true) => {
  let newConfig = {
    method: 'get', // default
    headers: { 'Request-Ajax': true },
    //baseURL: `${API_DOMAIN}`,
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout: 50000,
    ...config,
    params: config?.data,
  };
  let request: AxiosPromise = _httpClient.request(newConfig);

  return new Promise((resolve, reject) => {
    if (needLading) {
      message.loading('数据加载中…');
    }

    request
      .then(
        async response => {
          const result: any = response.data;
          if (result && result.status === 0) {
            //此处处理不同状态逻辑 例如 ajax 的登录拦截
            resolve(result.re);
          } else if (result.status === 401) {
            location.href = `${result.re.loginUrl}?service=${LOGIN_DOMAIN}`;
          } else {
            log(`getData`, `异常`, JSON.stringify(result));

            message.error(result.msg || '服务请求失败, 请稍后再试!');
            reject(response.data);
          }
        },
        e => catchHandle(e, reject)
      )
      .catch((e: any) => {
        catchHandle(e, reject);
      })
      .finally(() => {
        if (needLading) {
          message.destroy();
        }
      });
  });
};

/**
 * post 方式发送请求
 * @param opts ajax 参数
 */
export const postData = (
  config: any,
  needLading = true,
  needStringify = true
) => {
  if (needStringify) {
    config.data = qs.stringify({
      ...config?.data,
    });
  }

  let newConfig = {
    method: 'post', // default
    headers: {
      'Request-Ajax': true,
      //'Content-Type': 'application/x-www-form-urlencoded',
    },
    //baseURL: `${API_DOMAIN}`,
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout: 50000,
    ...config,
  };

  let request: AxiosPromise = _httpClient.request(newConfig);

  return new Promise((resolve, reject) => {
    if (needLading) {
      message.loading('数据加载中…');
    }

    request
      .then(
        async response => {
          const result: any = response.data;
          if (result && result.status === 0) {
            //此处处理不同状态逻辑 例如 ajax 的登录拦截
            resolve(result.re);
          } else if (result.status === 401) {
            location.href = `${result.re.loginUrl}?service=${LOGIN_DOMAIN}`;
          } else {
            log(`postData`, `异常`, JSON.stringify(result));
            message.error(result.msg || '服务请求失败, 请稍后再试!');
            reject(response.data);
          }
        },
        e => catchHandle(e, reject)
      )
      .catch((e: any) => {
        catchHandle(e, reject);

        reject(e.response);
      })
      .finally(() => {
        if (needLading) {
          message.destroy();
        }
      });
  });

  //return axios.request(newConfig);
};
/**
 * post 方式发送请求
 * @param opts ajax 参数
 */
export const mockData = (config: any) => {
  let newConfig = Object.assign(
    {
      method: 'get', // default
      baseURL: `${API_DOMAIN}`,
      responseType: 'json',
      responseEncoding: 'utf8',
      timeout: 50000,
    },
    config
  );
  let request: AxiosPromise = _httpClient.request(newConfig);

  return new Promise((resolve, reject) => {
    request
      .then(async response => {
        const result: any = response.data;

        if (result.status === 0) {
          //此处处理不同状态逻辑 例如 ajax 的登录拦截
          resolve(result.data.re);
        } else if (result.status === 5) {
          location.href = `/login?redirectURL=${encodeURIComponent(
            location.href
          )}`;
        } else {
          reject(response.data);
        }
      })
      .catch((e: any) => {
        catchHandle(e, reject);
        reject(e.response);
      });
  });

  //return axios.request(newConfig);
};

/**
 * api 接口调用统一是post data
 * @param opts ajax 调用参数
 */
export const apiDataTransform = (config: any) => {
  if (
    !config ||
    ('string' !== typeof config.url && 'string' !== typeof config.api)
  )
    return false;
  if ('string' === typeof config.api) {
    const data = config.data || {};
    config.data = qs.stringify({
      data,
    });
    config.url = config.api;
  }

  return postData(config);
};
/**
 * api 接口调用统一是post data
 * @param opts ajax 调用参数
 */
export const apiData = (config: any, needLading = true) => {
  if (
    !config ||
    ('string' !== typeof config.url && 'string' !== typeof config.api)
  ) {
    return false;
  }

  log(`apiData`, `config`, JSON.stringify(config));
  if ('string' === typeof config.api) {
    const data = { ...config.data };
    if (IS_DEV && DEBUG_TOKEN) {
      data.token = DEBUG_TOKEN; // eslint-disable-line
    }
    config.data = { data: JSON.stringify(data) };

    config.url = !NEED_MOCK ? `/api/gw?uri=${config.api}` : config.api;
  }

  return !NEED_MOCK ? postData(config, needLading) : mockData(config);
};

export const get = <T>(url: string, queryParams?: object) => {
  return _makeRequest<T>('GET', url, queryParams);
};

export const post = <T>(url: string, body: object, queryParams?: object) => {
  const data: any = qs.stringify(body);
  return _makeRequest<T>('POST', url, queryParams, data);
};

export const put = <T>(url: string, body: object, queryParams?: object) => {
  return _makeRequest<T>('PUT', url, queryParams, body);
};

export const patch = <T>(url: string, body: object, queryParams?: object) => {
  return _makeRequest<T>('PATCH', url, queryParams, body);
};

export const deleteQ = (url: string, queryParams?: object) => {
  return _makeRequest('DELETE', url, queryParams);
};

/**
 * axios 不支持jsonp 后期换掉 axios
 * @param opts
 */
export const zeptoGetData = (opts: any) => {
  let newOpts = Object.assign(
    {
      type: 'GET',
      cache: false,
      dataType: 'json',
      timeout: 20000,
    },
    opts
  );
  return $.ajax(newOpts);
};
export const fetch = (opts: any) => {
  return new Promise((resolve, reject) => {
    opts.success = (data: any) => {
      resolve(data); //把需要数据返回
    };
    opts.error = (data: any) => {
      reject(data); //把整个对象返回，status data 自己在逻辑处理
    };
    return zeptoGetData(opts);
  });
};
//502460
