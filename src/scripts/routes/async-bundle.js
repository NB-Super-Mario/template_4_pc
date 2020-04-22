import React, { Component } from 'react';

/**
 * react 异步加载模块 包装类
 *
 * 使用示例：
 * const AsyncAbout = props => {
 *    return (
 *       <AsyncBundle load={() => import('../about/index/index')}>
 *           {About => <About {...props} />}
 *       </AsyncBundle>
 *   );
 * };
 */
export default class AsyncBundle extends Component {
  constructor(props) {
    super(props);
    this.state = { mod: null, };
  }

  componentWillMount() {
    this.loadModule(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.loadModule(nextProps);
    }
  }

  loadModule(props) {
    this.setState({ mod: null, });
    props.load().then((mod) => {
      this.setState({ mod: mod.default, });
    });
  }

  render() {
    return this.state.mod ? (
      this.props.children(this.state.mod)
    ) : (
      <div>Loading...</div>
    );
  }
}
