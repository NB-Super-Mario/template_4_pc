import React, { Component } from 'react';
import { Icon, Badge, Popover, Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import histroy from '@routes/history';
import NoticeMessage from '../notice-message';
import NavBar from '@components/navigation-bar';

import './index.less';

// const routerPush = (link, pathname) => {
//   if (pathname !== link) histroy.push(link)
// }
const menu = (
  <Menu style={{ width: 120 }}>
    <Menu.Item key="0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        个人中心
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        个人设置
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">退出登录</Menu.Item>
  </Menu>
);
class Header extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      navList: []
    };
  }

  componentDidMount() {
    this.setState({
      navList: [
        { link: '/home', navName: '首页' },
        { link: '/home/detail', navName: '详情' },
        { link: '/selectCity', navName: '选择城市' },
        { link: '/aaa', navName: '报价系统' },
        { link: '/bbb', navName: '客户关系系统' },
        { link: '/ddd', navName: '运营系统' },
        { link: '/eee', navName: '车辆系统' },
        { link: '/fff', navName: '司机系统' },
        { link: '/ggg', navName: '营销系统' },
        { link: '/hhh', navName: 'hh' },
        { link: '/iii', navName: 'iiiiiiiii' }
      ]
    });
  }

  hide = () => {};

  render() {
    // const { pathname } = this.props;
    return (
      <div className="header">
        <div className="header-left">
          <a
            href="javascript:;"
            onClick={() => histroy.push('/home')}
            rel="noopener noreferrer"
            className="header-logo u-logo"
          >
            <span className="env-text">预生产环境</span>
          </a>
        </div>
        <NavBar navs={this.state.navList} />
        <div className="header-right">
          <Popover
            content={<NoticeMessage />}
            trigger="click"
            placement="topRight"
          >
            <Badge count={1000} overflowCount={999} offset={[20, 0]}>
              <i className="bell-icon u-bell" />
            </Badge>
          </Popover>
          <div className="usr-info">
            <Dropdown overlay={menu}>
              <div>
                <div className="usr-info-head">
                  <img src={`${DOMAIN}static-img/head-img.png`} alt="" />
                </div>
                <Icon type="down" theme="outlined" className="down-arrow" />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    pathname: state.router.location.pathname
  };
}

export default connect(mapStateToProps)(Header);
