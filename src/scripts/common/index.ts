import './index.less';

const initTrack = () => {
  if (NEEDTRACK) {
    var _hmt = _hmt || [];
    window._hmt = _hmt;
    const hm = document.createElement('script');
    hm.src = `https://hm.baidu.com/hm.js?${BAIDU_KEY}`;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  }
};
const Common = (): void => {
  initTrack();
  console.log('index common js~~!');
};

export default Common;
