import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
import { saveFromData, getFormData } from '@actions/form';

const Option = Select.Option;

const FormItem = Form.Item;

class ListDemo extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      expand: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  componentDidMount() {
    // To disabled submit button at the beginning.

    this.props.getFormData(1);
    this.props.form.validateFields();
  }
  hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };
  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
      setFieldsValue
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError =
      isFieldTouched('userName') && getFieldError('userName');
    const passwordError =
      isFieldTouched('password') && getFieldError('password');
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Row gutter={24}>
          <Col span={6}>
            <FormItem
              label={`公务车单号`}
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName', {
                rules: [
                  {
                    type: 'email',
                    message: '邮箱格式不合法!'
                  },
                  { required: true, message: '请输入用户名!' }
                ]
              })(
                <Input className="login-input" placeholder="请输入您的用户名" />
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem
              label={`用车性质`}
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Select placeholder="请选择" onChange={this.handleSelectChange}>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem
              label={`用车人电话`}
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('phone', {
                rules: [
                  {
                    type: 'email',
                    message: '邮箱格式不合法!'
                  },
                  { required: true, message: '请输入用户名!' }
                ]
              })(
                <Input
                  className="login-input"
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="请输入手机号"
                />
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem>
              <Button
                disabled={this.hasErrors(getFieldsError())}
                type="primary"
                htmlType="submit"
              >
                查询
              </Button>
              <Button
                style={{ marginLeft: 8 }}
                disabled={this.hasErrors(getFieldsError())}
                type="default"
                htmlType="submit"
              >
                重置
              </Button>
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                {!this.state.expand ? '展开' : '收起'}{' '}
                <Icon type={this.state.expand ? 'up' : 'down'} />
              </a>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedForm = Form.create({
  mapPropsToFields(props) {
    return {
      userName: Form.createFormField({
        value: props.formData.comboName
      })
    };
  }
})(ListDemo);

const mapStateToProps = state => {
  return {
    formData: state.form.data
  };
};

export default connect(
  mapStateToProps,
  {
    saveFromData,
    getFormData
  }
)(WrappedForm);
