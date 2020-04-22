import React, { Component } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import history from '@routes/history';
import './index.less';

const NORMAL_TYPE = 'NORMAL_TYPE';
const FAIL_TYPE = 'FAIL_TYPE';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visable: this.props.visable,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visable !== this.props.visable) {
      this.setState({
        visable: nextProps.visable,
      });
    }
  }

  static NORMAL_TYPE: string;

  static FAIL_TYPE: string;

  render() {
    const { text, type, failText, replayCb } = this.props;
    const clazz =
      type === FAIL_TYPE ? classNames('no-found', 'fail-type') : 'no-found';
    return this.state.visable ? (
      <div className={clazz} onClick={replayCb}>
        <div
          className="no-found-empty"
          style={{
            backgroundImage: `url("${DOMAIN}static/static-img/error.svg")`,
          }}
        >
          {/* <span className="m-error">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
            <span className="path4"></span>
            <span className="path5"></span>
            <span className="path6"></span>
            <span className="path7"></span>
            <span className="path8"></span>
            <span className="path9"></span>
            <span className="path10"></span>
            <span className="path11"></span>
            <span className="path12"></span>
            <span className="path13"></span>
            <span className="path14"></span>
            <span className="path15"></span>
            <span className="path16"></span>
            <span className="path17"></span>
            <span className="path18"></span>
            <span className="path19"></span>
            <span className="path20"></span>
            <span className="path21"></span>
            <span className="path22"></span>
            <span className="path23"></span>
            <span className="path24"></span>
            <span className="path25"></span>
            <span className="path26"></span>
            <span className="path27"></span>
            <span className="path28"></span>
            <span className="path29"></span>
            <span className="path30"></span>
            <span className="path31"></span>
            <span className="path32"></span>
            <span className="path33"></span>
            <span className="path34"></span>
            <span className="path35"></span>
            <span className="path36"></span>
            <span className="path37"></span>
            <span className="path38"></span>
            <span className="path39"></span>
            <span className="path40"></span>
            <span className="path41"></span>
            <span className="path42"></span>
            <span className="path43"></span>
            <span className="path44"></span>
            <span className="path45"></span>
            <span className="path46"></span>
            <span className="path47"></span>
            <span className="path48"></span>
            <span className="path49"></span>
            <span className="path50"></span>
            <span className="path51"></span>
            <span className="path52"></span>
            <span className="path53"></span>
            <span className="path54"></span>
            <span className="path55"></span>
            <span className="path56"></span>
            <span className="path57"></span>
            <span className="path58"></span>
            <span className="path59"></span>
            <span className="path60"></span>
            <span className="path61"></span>
            <span className="path62"></span>
          </span> */}
        </div>
        {/* <div className="no-found-icon">
        <div className="no-found-icon-dot" />
        <div className="no-found-icon-step no-found-icon-step-1" />
        <div className="no-found-icon-step no-found-icon-step-2" />
        <div className="no-found-icon-step no-found-icon-step-3" />

      </div> */}
        <div className="no-found-info">
          <div className="status-code">500</div>
          <div className="error-msg"> {text}</div>
          <Button type="dashed" onClick={() => history.replace('/')}>
            返回首页
          </Button>
        </div>
        {type === FAIL_TYPE ? (
          <p className="fail-type-text">{failText}</p>
        ) : null}
      </div>
    ) : null;
  }
}
NotFound.defaultProps = {
  text: '服务器错误请重试！',
  visable: true,
  type: NORMAL_TYPE,
  failText: '不要离开 点击任意位置重试一下',
};
NotFound.NORMAL_TYPE = NORMAL_TYPE;
NotFound.FAIL_TYPE = FAIL_TYPE;
export default NotFound;
