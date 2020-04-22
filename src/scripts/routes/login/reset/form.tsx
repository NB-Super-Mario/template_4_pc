import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import history from '@routes/history';

const FormItem = Form.Item;
const hasErrors = fieldsError => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
};
class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        history.replace('/login/resetStatus');
      }
    });
  };
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
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

        <FormItem>
          <Button
            disabled={hasErrors(getFieldsError())}
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            确认
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
