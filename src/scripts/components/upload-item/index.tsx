import React, { Component } from 'react';
import { message, Button, Upload } from 'antd';
import './index.less';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = file => {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
};
class UploadItem extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Button href="" type="primary" block>
          更换照片
        </Button>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    const { fileName, nameInfo, sizeInfo } = this.props;
    return (
      <div className="upload-item">
        <Upload
          name={fileName}
          listType="picture"
          className="avatar-uploader"
          showUploadList={false}
          action="//jsonplaceholder.typicode.com/posts/"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          <div className="img-desc">
            <div className="name-info">{nameInfo}</div>
            <div className="size-info">{sizeInfo}</div>
          </div>
          <div className="preview-panel">
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" />
            ) : (
              <div className="img-bg" />
            )}
          </div>
          {uploadButton}
        </Upload>
      </div>
    );
  }
}

export default UploadItem;
