import React, { Component } from 'react';

import classNames from 'classnames';

import './index.less';

const NORMAL_TYPE = 'NORMAL_TYPE';
const FAIL_TYPE = 'FAIL_TYPE';
class NotFound extends Component {
  static defaultProps = {
    text: '数据加载失败',
    visable: true,
    type: NORMAL_TYPE,
    failText: '不要离开 点击任意位置重试一下'
  };
  static NORMAL_TYPE: string;
  static FAIL_TYPE: string;
  constructor(props: any) {
    super(props);
    this.state = {
      visable: this.props.visable
    };
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.visable !== this.props.visable) {
      this.setState({
        visable: nextProps.visable
      });
    }
  }
  render() {
    const { text, type, failText, replayCb } = this.props;
    const clazz =
      type === FAIL_TYPE ? classNames('no-found', 'fail-type') : 'no-found';

    return this.state.visable ? (
      <div className={clazz} onClick={replayCb}>
        <div className="no-found-empty" />
        {/* <div className="no-found-icon">
        <div className="no-found-icon-dot" />
        <div className="no-found-icon-step no-found-icon-step-1" />
        <div className="no-found-icon-step no-found-icon-step-2" />
        <div className="no-found-icon-step no-found-icon-step-3" />

      </div> */}
        <p className="no-found-text">{text}</p>
        {type === FAIL_TYPE ? (
          <p className="fail-type-text">{failText}</p>
        ) : null}
      </div>
    ) : null;
  }
}
NotFound.NORMAL_TYPE = NORMAL_TYPE;
NotFound.FAIL_TYPE = FAIL_TYPE;
export default NotFound;
