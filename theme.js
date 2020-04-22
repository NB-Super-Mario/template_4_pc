/**
 * antd 自定义主题
 */
const config = require('config');

const domain = config.get('domain');
module.exports = {
  '@blue-6': '#365393',
  // '@menu-item-color': '#333',
  // '@border-color-split': '#f8f8f8',
  // '@color-text-base': 'red'
  '@icon-url': `"${domain}static-icons/font_icon"`,
  '@table-row-hover-bg': '#fafafa',
  '@font-family': `PingFang-SC-Regular, , Microsoft Yahei,
  Hiragino Sans GB, tahoma, STHeiTi, Arial,`,
};
