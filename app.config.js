const path = require('path');
const config = require('config');

const hostname = config.get('hostname');

const apiDomain = config.get('apiDomain');
const needMock = config.get('needMock');

const isOpenBrowser = config.get('isOpenBrowser');
const port = config.get('port');
const environmentName = config.get('environmentName');
const domain = config.get('domain');

const CDN_PATH = config.get('CDN_PATH');
const IM_PATH = config.get('IM_PATH');
const origin = config.get('origin');
const isDev = config.get('isDev');
const debugToken = config.get('debugToken');
const needTrack = config.get('needTrack');
const baiduKey = config.get('baiduKey');

const cwd = process.cwd();
const pkg = require(path.resolve(cwd, 'package.json'));

const src = path.resolve(cwd, 'src');
const PREFIX_TARGET = 'static/';
module.exports = {
  definePlugin: [
    {
      ENVIRONMENT_NAME: JSON.stringify(environmentName),
      API_DOMAIN: JSON.stringify(apiDomain),
      DOMAIN: JSON.stringify(domain),
      CDN_PATH: JSON.stringify(CDN_PATH),
      IM_PATH: JSON.stringify(IM_PATH),
      ORIGIN: JSON.stringify(origin),
      NEED_MOCK: JSON.stringify(needMock),
      IS_DEV: JSON.stringify(isDev),
      DEBUG_TOKEN: JSON.stringify(debugToken),
      NEEDTRACK: JSON.stringify(needTrack),
      BAIDU_KEY: JSON.stringify(baiduKey),
    },
  ],
  otherHtmlConfig: {
    im_path: IM_PATH,
    cdn_path: CDN_PATH,
  },
  alias: {
    '@ant-design/icons/lib/dist$': path.resolve(
      cwd,
      'src/scripts/common/icons.ts'
    ),
    '@components': path.resolve(cwd, 'src/scripts/components'),
    '@common': path.resolve(cwd, 'src/scripts/common'),
    '@actions': path.resolve(cwd, 'src/scripts/actions'),
    '@api': path.resolve(cwd, 'src/scripts/api'),
    '@routes': path.resolve(cwd, 'src/scripts/routes'),
    '@util': path.resolve(cwd, 'src/scripts/util'),
    '@hooks': path.resolve(cwd, 'src/scripts/hooks'),
  },
  domain,
  hostname,
  pkg,
  cwd,
  src,
  //prefixTarget: 'react/',
  prefixTarget: PREFIX_TARGET,
  dllEntry: {
    react: [
      'react',
      'react-dom',
      'react-router-dom',
      'connected-react-router',
      //'redux',
      'react-redux',
    ],
  },
  dllOutput: path.resolve(cwd, 'src', 'dll'),
  provideDefs: {
    //$ jQuery 使用当前resolve的jquery
    //React: 'react',
    // ReactDom: 'react-dom',
    //RreactRouterDom: 'react-router-dom',
    //  Redux: 'redux',
    //ReactRedux: 'react-redux',
    $: 'jquery',
    jQuery: 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery',
  },
  externals: {
    /* react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    }, */
    // react: 'React',
    //'react-dom': 'ReactDOM',
    //'react-router-dom': 'ReactRouterDom',
    //axios: 'axios',
    //redux: 'Redux',
    //'react-redux': 'ReactRedux',
    //jquery: 'jQuery',
    //jquery: '$',
  },
  alwaysWriteToDisk: true,
  minify: {
    /* removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true */
  },
  copyRes: [
    {
      from: 'src/static-res/mock',
      to: `${PREFIX_TARGET}static-mock`,
    },
    {
      from: 'src/static-res/img',
      to: `${PREFIX_TARGET}static-img`,
    },
    {
      from: 'src/static-res/css',
      to: `${PREFIX_TARGET}static-css`,
    },
    {
      from: 'src/static-res/icons',
      to: `${PREFIX_TARGET}static-icons`,
    },
  ],
  dev: {
    publicPath: domain,
    output: path.resolve(cwd, '__build'),
    isOpenBrowser: false,
  },
  build: {
    publicPath: domain,
    output: path.resolve(cwd, 'target', `${pkg.name}`),
    bundleAnalyzerReport: process.env.npm_config_report, // npm run build --report
    productionGzip: true,
    combo: false, // 预留字段
    chunkhash: false,
  },
  isAntd: true,
  isBootstrap: false,
  indexPage: 'index.html',
};
