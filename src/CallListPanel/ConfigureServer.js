import React from 'react';
import { Button, Modal, Form, Input, message } from 'antd';

const CollectionCreateForm = Form.create({
  name: 'form_in_modal',
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      serverAddress: Form.createFormField({
        ...props.serverAddress,
        value: props.serverAddress.value,
      }),
    };
  },
  onValuesChange(_, values) {
  },
})(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Configure Server"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Server Address">
              {getFieldDecorator('serverAddress', {
                rules: [{ required: true, message: 'You must specify a server address' }],
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

export default class CollectionsPage extends React.Component {
  state = {
    visible: false,
    fields: {
      serverAddress: {
        value: this.props.serverUrl,
      }
    }
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  handleCreate = async () => {
    const { form } = this.formRef.props;
    form.validateFields(async (err, values) => {
      if (err) return;
      const result = await this.props.changeServerUrl(values.serverAddress);
      if (result === 'success') {
        this.setState({
          visible: false,
          fields: {
            serverAddress: {
              value: values.serverAddress,
            },
          },
        });
      } else {
        message.error('WebSocket server change failed, please try another URL.');
      }
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.showModal}
          icon="setting"
          style={{
            margin: '24px 24px 16px 20px',
            opacity: 0.65,
            fontSize: '26px',
            border: 'none',
          }}
        />
        <CollectionCreateForm
          {...this.state.fields}
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          onChange={this.handleFormChange}
        />
      </div>
    );
  }
}
