import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import raf from 'raf';
import history from '@routes/history';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      update: false
    };
    //this.textInput = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        history.push('/home');
      }
    });
  };
  componentDidMount() {
    // To disabled submit button at the beginning.
    setTimeout(() => {
      raf(() => this.update());
    }, 500);

    this.props.form.validateFields();
  }
  update = () => {
    this.setState({
      update: true
    });
  };
  isAutofill = () => {
    return $('#userName').is('*:-webkit-autofill');
  };
  hasErrors = fieldsError => {
    raf(() => this.update());
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    // Only show error after a field is touched.
    const userNameError =
      isFieldTouched('userName') && getFieldError('userName');
    const passwordError =
      isFieldTouched('password') && getFieldError('password');
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem
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
            <Input
              className="login-input"
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入您的用户名"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }]
          })(
            <Input
              className="login-input"
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入您的密码"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>记住密码</Checkbox>)}
          <span
            className="login-form-forgot"
            onClick={() => history.push('/login/reset')}
          >
            忘记密码？
          </span>
          <Button
            disabled={this.hasErrors(getFieldsError()) && !this.isAutofill()}
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
