import React, { Component } from "react";
import { Input, Row, Col, Card, Modal, Form,Upload, message ,Button, Icon } from "antd";
import { Text, Content, Space } from "./components";
import home from "./assets/icons/home.svg";
import Message from "./assets/icons/message.svg";
import user from "./assets/icons/user.svg";
import ai from "./assets/icons/ai.png";
import siit from "./assets/icons/siit.jpg";
import uncheck from "./assets/icons/uncheck.svg";
import './App.css'

const Search = Input.Search;
const FormItem = Form.Item;
const { TextArea } = Input;

const CollectionCreateForm = Form.create()(
  class App extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      
      const props = {
        name: 'file',
        action: '//jsonplaceholder.typicode.com/posts/',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      return (
        <Modal
          visible={visible}
          okText="Save"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <Text size="1rem" type="bold"><img alt="uncheck" src={uncheck} width={25} />{' '}Preliminary Research Report</Text>
        <Space /><Space />
        <Text>Fill in the following to complete this task.</Text>
        <Space /><Space />
          <Form layout="vertical">
            <FormItem label="Report Title">
              {getFieldDecorator("Report Title", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input placeholder="Report title" />)}
            </FormItem>
            <FormItem label="Section">
              {getFieldDecorator("section")(<Input type="textarea" placeholder="Some Section" />)}
            </FormItem>
            <Upload {...props}>
            <FormItem label="Files">
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
              </FormItem>
            </Upload>
            <Space />
            <FormItem label="Description">
              {getFieldDecorator("description")(<TextArea rows={4} placeholder="Some or more description for this report." />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class App extends Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div>
        <div class="header">
          <a href="#default" class="logo">iT</a>
          <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200,position: 'relative', top: 12 ,right: -13 }}
            />
          <div class="header-right">
            <a href="#home"><img alt="home" src={home} width={30} />{" "}</a>
            <a href="#contact"><img alt="Message" src={Message} width={30} />{" "}</a>
            <a href="#about"><img alt="user" src={user} width={30} /></a>
          </div>
        </div>
        <div class="rectangle"></div>
        <div class="avartar">
          <img alt="user" src={user} /> 
        </div>

        <Content textAlign="left" margin="5%">
          <Row gutter={16} style={{ position: "relative", top: "-43px"}}>
            <Space />
            <Col span={12}>
              <Text type="bold" size="1.5rem">
                Kobkrit Viriyayudhakorn
              </Text>
            </Col>
            <Col span={12}>
              <Text type="bold">
                <img alt="siit" src={siit} width={50} /> {' '}Sirindhorn International
                Institute of Science 
              </Text>
              <Space /><Space />
              <Text type="bold">
                <img alt="ai" src={ai} width={40} />{' '}Embedded System
              </Text>
            </Col>
          </Row>
          <div style={{ background: "#9b9b9b", padding: "30px" }}>
            <Row gutter={16}>
              <Col span={8} style={{ padding: "0.5%" }}>
                <Text type="bold" size="1rem" color="white">
                  Your Dashboard
                </Text>
                <Card bordered={false}>
                  <Text size="1.7rem" color="#4a90e2">
                    23
                  </Text>
                  <Space />
                  <Text>tasks left</Text>
                </Card>
              </Col>
              <Col span={8} style={{ padding: "0.6%" }}>
                <Space />
                <Card bordered={false}>
                  <Text size="1.7rem" color="#4a90e2">
                    80%
                  </Text>
                  <Space />
                  <Text>tasks done</Text>
                </Card>
              </Col>
              <Col span={8}>
                <Text type="bold" size="1.2rem" color="white">
                  Excellent Progress
                </Text>
                <Card bordered={false}>
                  <Text size="1.7rem" color="#4a90e2">
                    150
                  </Text>
                  <Space />
                  <Text>days left</Text>
                </Card>
              </Col>
            </Row>
          </div>
          <Card>
            <p
              style={{
                fontSize: 20,
                color: "rgba(0, 0, 0, 0.85)",
                marginBottom: 16,
                fontWeight: 500
              }}
            >
              Course works
            </p>
            <Card type="inner" style={{ borderColor: "white" }}>
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
                ITS100 Computer Programming Language
              </Text>
              <Space /> Completed on 8 May 2017
            </Card>
            <Card style={{ marginTop: 16, borderColor: "white" }} type="inner">
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
                ITS101 Data Structure
              </Text>
              <Space />
              Semester 2/2017
            </Card>
            <Card style={{ marginTop: 16, borderColor: "white" }} type="inner">
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
                ITS102 C# Programming Language
              </Text>
              <Space />
              Semester 2/2017
            </Card>
            <Card style={{ marginTop: 16, borderColor: "white" }} type="inner">
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
                ITS103 Java Programming Language
              </Text>
              <Space />
              Semester 2/2017
            </Card>
          </Card>
          <Space />
          <Card>
            <p
              style={{
                fontSize: 20,
                color: "rgba(0, 0, 0, 0.85)",
                marginBottom: 16,
                fontWeight: 500
              }}
            >
              Reseaches
            </p>
            <Card type="inner" style={{ borderColor: "white" }}>
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
                Preliminary Research Report
              </Text>
              <Space /> Completed on 8 May 2017
            </Card>
            <Card style={{ marginTop: 16, borderColor: "white" }} type="inner">
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
                Research Proposal
              </Text>
              <Space />
              Completed on 11 May 2017
            </Card>
            <Card style={{ marginTop: 16, borderColor: "white" }} type="inner">
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
                Conference Paper1
              </Text>
              <Space />
              Completed on 12 May 2017
            </Card>
            <Card style={{ marginTop: 16, borderColor: "white" }} type="inner">
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
              Conference Paper2
              </Text>
              <Space />
              Semester 2/2017
            </Card>
            <Card style={{ marginTop: 16, borderColor: "white" }} type="inner">
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold">
              Thesis
              </Text>
              <Space />
              Semester 2/2017
            </Card>
          </Card>
          <Space />
          <Card>
            <p
              style={{
                fontSize: 20,
                color: "rgba(0, 0, 0, 0.85)",
                marginBottom: 16,
                fontWeight: 500
              }}
            >
              Graducation Requirements
            </p>
            <Card type="inner" style={{ borderColor: "white" }}>
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
                English Test
              </Text>
              <Space /> Completed on 8 May 2017
            </Card>
            <Card style={{ marginTop: 16, borderColor: "white" }} type="inner">
              <img alt="uncheck" src={uncheck} width={15} />{" "}
              <Text size="1rem" type="bold" onClick={this.showModal}>
                Graduation Grown Photo
              </Text>
              <Space />
              Completed on 8 May 2017
            </Card>
          </Card>
        </Content>

        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default App;
