import React from 'react';
import { Breadcrumb } from 'antd';
import SearchForm from './search-form';
import TableList from './table';
import './index.less';

const ListDemo = () => (
  <div className="list-demo">
    <div className="table-top-panel">
      <div className="bread-crumb">
        <Breadcrumb>
          <Breadcrumb.Item>车辆管理</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">违章管理</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>违章查询管理</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <SearchForm />
    </div>

    <TableList />
  </div>
);

export default ListDemo;
