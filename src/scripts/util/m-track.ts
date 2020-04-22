const trackEvent = opts => {
  if (!_hmt) {
    _hmt = [];
  }
  _hmt.push(['_trackEvent'].concat(opts));
};

window.onerror = (message, url) => {
  if (!url) {
    url = location.href;
  }
  trackEvent(['jsError', url, message]);
};

const log = (category, action, optLabel, optValue?) => {
  if (NEEDTRACK && category && action) {
    var opts = [category, action];
    if (optLabel) {
      opts.push(optLabel);
    }
    if (optValue) {
      opts.push(optValue);
    }
    trackEvent(opts);
  }
};

export { log };
