import React, { Component } from 'react';
import { Table, Menu, Dropdown, Icon, Drawer } from 'antd';
import { connect } from 'react-redux';
import { addTabPage } from '@actions/home';
import Message from '@util/message';
// import reqwest from 'reqwest';

const data = {
  results: [
    {
      gender: 'male',
      no: 1111,
      location: {
        street: '1810 northcote road',
        city: 'hamilton',
        state: 'tasman',
        postcode: 97439,
        coordinates: {
          latitude: '62.4763',
          longitude: '-91.3979'
        },
        timezone: {
          offset: '+7:00',
          description: 'Bangkok, Hanoi, Jakarta'
        }
      },
      email: 'michael.jones@example.com',
      login: {
        uuid: 'c5c294cf-7eaf-4f1b-b547-827d3311f531',
        username: 'crazyladybug557',
        password: 'ellie',
        salt: 'D6O08hR0',
        md5: '7b65e7e24250df0a580237bf5fd59403',
        sha1: '037d8d15b5bf4555336b3356160a38c46873a637',
        sha256:
          'b2fc9d8b6b0ac3a3555eb0b02f9631ea30ec9777e73cc94b46016becb1314904'
      },
      dob: {
        date: '1953-04-22T22:52:38Z',
        age: 65
      },
      registered: {
        date: '2010-04-03T02:36:29Z',
        age: 8
      },
      phone: '(221)-193-1284',
      cell: '(696)-773-4605',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/81.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg'
      },
      nat: 'NZ'
    },
    {
      gender: 'male',
      no: 222,
      location: {
        street: '1810 northcote road',
        city: 'hamilton',
        state: 'tasman',
        postcode: 97439,
        coordinates: {
          latitude: '62.4763',
          longitude: '-91.3979'
        },
        timezone: {
          offset: '+7:00',
          description: 'Bangkok, Hanoi, Jakarta'
        }
      },
      email: 'michael.jones@example.com',
      login: {
        uuid: 'c5c294cf-7eaf-4f1b-b547-827d3311f532',
        username: 'crazyladybug557',
        password: 'ellie',
        salt: 'D6O08hR0',
        md5: '7b65e7e24250df0a580237bf5fd59403',
        sha1: '037d8d15b5bf4555336b3356160a38c46873a637',
        sha256:
          'b2fc9d8b6b0ac3a3555eb0b02f9631ea30ec9777e73cc94b46016becb1314904'
      },
      dob: {
        date: '1953-04-22T22:52:38Z',
        age: 65
      },
      registered: {
        date: '2010-04-03T02:36:29Z',
        age: 8
      },
      phone: '(221)-193-1284',
      cell: '(696)-773-4605',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/81.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg'
      },
      nat: 'NZ'
    },
    {
      gender: 'male',
      no: 333,
      location: {
        street: '1810 northcote road',
        city: 'hamilton',
        state: 'tasman',
        postcode: 97439,
        coordinates: {
          latitude: '62.4763',
          longitude: '-91.3979'
        },
        timezone: {
          offset: '+7:00',
          description: 'Bangkok, Hanoi, Jakarta'
        }
      },
      email: 'michael.jones@example.com',
      login: {
        uuid: 'c5c294cf-7eaf-4f1b-b547-827d3311f533',
        username: 'crazyladybug557',
        password: 'ellie',
        salt: 'D6O08hR0',
        md5: '7b65e7e24250df0a580237bf5fd59403',
        sha1: '037d8d15b5bf4555336b3356160a38c46873a637',
        sha256:
          'b2fc9d8b6b0ac3a3555eb0b02f9631ea30ec9777e73cc94b46016becb1314904'
      },
      dob: {
        date: '1953-04-22T22:52:38Z',
        age: 65
      },
      registered: {
        date: '2010-04-03T02:36:29Z',
        age: 8
      },
      phone: '(221)-193-1284',
      cell: '(696)-773-4605',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/81.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg'
      },
      nat: 'NZ'
    }
  ],
  info: {
    seed: '279daea6d50a2414',
    results: 1,
    page: 1,
    version: '1.2'
  }
};
class TableList extends Component {
  private myRef: any;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    data: data.results,
    pagination: {
      showTotal: (total, range) =>
        `共 ${total} 条记录 当前 ${range[0]}-${range[1]} 条`
    },
    loading: false,
    visible: false,
    placement: 'right'
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;

    this.setState({
      pagination: pager
    });

    /* this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    }); */
  };
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    setTimeout(_ => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination
      });
    }, 1000);
    /*  reqwest({
       url: 'https://randomuser.me/api',
       method: 'get',
       data: {
         results: 10,
         ...params,
       },
       type: 'json',
     }).then((data) => {
       const pagination = { ...this.state.pagination };
       // Read total count from server
       // pagination.total = data.totalCount;
       pagination.total = 200;
       this.setState({
         loading: false,
         data: data.results,
         pagination,
       });
     }); */
  };

  componentDidMount() {
    this.fetch();
  }

  goToDetail = record => {
    const data = {
      protocol: 'home_listener_add_page',
      parameters: {
        title: '详情',
        content: `New Tab Pane ${record.no}`,
        key: `${DOMAIN}detail.html`,
        params: {
          no: record.no
        }
      },
      callBack: data => {
        console.log(`调用方收到反馈${JSON.stringify(data)}`);
      }
    };
    Message.postMessage(data, window.top);
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };
  render() {
    let columns = [
      {
        title: '违章单号',
        dataIndex: 'no',
        sorter: true,
        fixed: 'left',
        render: (text, record) => (
          <a onClick={() => this.goToDetail(record)}>{text}</a>
        ),
        width: 200
      },
      {
        title: '车牌号码',
        fixed: 'left',
        dataIndex: 'gender',
        filters: [
          { text: 'Male', value: 'male' },
          { text: 'Female', value: 'female' }
        ]
      },
      {
        title: '短租车型',
        dataIndex: 'email'
      },
      {
        title: '短租车型',
        dataIndex: 'phone'
      },
      {
        title: '短租车型',
        dataIndex: 'cell'
      },
      {
        title: '短租车型',
        dataIndex: 'nat'
      },
      {
        title: '操作',
        key: 'actions',
        align: 'center',
        fixed: 'right',
        width: 100,
        render: (text, record) => {
          const menu = (
            <Menu style={{ width: 120 }}>
              <Menu.Item
                key={`cancel-${record.login.uuid}`}
                onClick={this.showDrawer}
              >
                取消订单
              </Menu.Item>
              <Menu.Item key={`search-${record.login.uuid}`}>
                查询记录
              </Menu.Item>
              <Menu.Item key={`search-time-${record.login.uuid}`}>
                记录查询时间
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key={`search-paper-${record.login.uuid}`}>
                查看验收单
              </Menu.Item>
            </Menu>
          );
          return (
            <Dropdown overlay={menu} placement={'bottomCenter'}>
              <a className="ant-dropdown-link" href="javascript:;">
                操作 <Icon type="down" />
              </a>
            </Dropdown>
          );
        }
      }
    ];

    return (
      <div className="table-panel" ref={this.myRef}>
        <Table
          scroll={{ x: 1100 }}
          columns={columns}
          rowKey={record => record.login.uuid}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
        <Drawer
          /*  getContainer={this.myRef.current} */
          width={500}
          /*  mask={false} */
          title="Basic Drawer"
          placement={this.state.placement}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    addTabPage
  }
)(TableList);
