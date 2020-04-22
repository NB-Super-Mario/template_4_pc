import React, { Component } from 'react';
import { Modal } from 'antd';
import './index.less';

class PreviewImage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      previewVisible: false
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  showPreview = () => {
    this.setState({ previewVisible: true });
  };

  render() {
    const { previewVisible } = this.state;
    const { src, thumb } = this.props;
    return (
      <div className="preview-image">
        <img
          alt="preview"
          src={thumb}
          className="preview-image-pic"
          onClick={this.showPreview}
        />
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={src} />
        </Modal>
      </div>
    );
  }
}

export default PreviewImage;
