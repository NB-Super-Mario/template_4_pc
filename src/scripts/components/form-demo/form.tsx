import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Affix, Upload, Modal } from 'antd';
import { saveFromData, getFormData } from '@actions/form';
import FormDetailList from '../form-detail-list';

const FormDetailItem = FormDetailList.FormDetailItem;

const FormItem = Form.Item;

class DetailForm extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,

      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ]
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

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

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
      setFieldsValue
    } = this.props.form;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    // Only show error after a field is touched.
    const userNameError =
      isFieldTouched('userName') && getFieldError('userName');
    const passwordError =
      isFieldTouched('password') && getFieldError('password');
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormDetailList title="测试标题" col={3}>
          <FormDetailItem>
            <FormItem
              label="所属门店"
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  className="login-input"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="请输入您的密码"
                />
              )}
            </FormItem>
          </FormDetailItem>
          <FormDetailItem>
            <FormItem
              label="所属门店"
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
          </FormDetailItem>
          <FormDetailItem>
            <FormItem
              label="所属门店"
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password2', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  className="login-input"
                  type="password"
                  placeholder="请输入您的密码"
                />
              )}
            </FormItem>
          </FormDetailItem>
          <FormDetailItem>
            <FormItem
              label="所属门店"
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName2', {
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
          </FormDetailItem>
        </FormDetailList>
        <FormDetailList title="测试标题" col={3}>
          <FormDetailItem>
            <FormItem
              label="所属门店"
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password3', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  className="login-input"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="请输入您的密码"
                />
              )}
            </FormItem>
          </FormDetailItem>
          <FormDetailItem>
            <FormItem
              label="所属门店"
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName3', {
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
                  placeholder="请输入您的用户名"
                />
              )}
            </FormItem>
          </FormDetailItem>
          <FormDetailItem>
            <FormItem
              label="所属门店"
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password4', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  className="login-input"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="请输入您的密码"
                />
              )}
            </FormItem>
          </FormDetailItem>
          <FormDetailItem>
            <FormItem
              label="所属门店"
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName4', {
                rules: [
                  {
                    type: 'email',
                    message: '邮箱格式不合法!'
                  },
                  { required: true, message: '请输入用户名!' }
                ]
              })(
                <div>
                  <Upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                  >
                    {fileList.length >= 3 ? null : uploadButton}
                  </Upload>
                  <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={this.handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: '100%' }}
                      src={previewImage}
                    />
                  </Modal>
                </div>
              )}
            </FormItem>
          </FormDetailItem>
        </FormDetailList>
        <Affix offsetBottom={20}>
          <div className="form-btns">
            <Button
              disabled={this.hasErrors(getFieldsError())}
              type="primary"
              htmlType="submit"
              size="large"
            >
              保存
            </Button>
            <Button
              style={{ marginLeft: 12 }}
              disabled={this.hasErrors(getFieldsError())}
              type="default"
              htmlType="submit"
              size="large"
            >
              取消
            </Button>
          </div>
        </Affix>
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
})(DetailForm);

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
