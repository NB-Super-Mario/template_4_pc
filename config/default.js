const ip = require('ip').address();
// const ip = '127.0.0.1';
const PORT = 9009;
let cookie;
module.exports = {
  environmentName: 'test',
  port: PORT,
  hostname: `${ip}:${PORT}/`, // combo 将要替换的域名
  domain: `//${ip}:${PORT}/`, // 替换后域名
  apiDomain: '/',
  origin: `http://${ip}:${PORT}`,
  CDN_PATH: '//inner.10101111cdn.com/',
  IM_PATH: '//imtest1.demo.com/',
  isDev: true,
  debugToken: '',
  needTrack: false,
  baiduKey: '',
  proxy: {
    '/api': {
      target: 'http://test.demo.com',
      //target: 'http://192.168.3.6:7001',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '/api',
        //'^/api/': '/admin/api/'
      },
    },
  },
  isOpenBrowser: true,
  needMock: false,
};
