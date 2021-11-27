import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, Card , Typography } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { Title } = Typography;
function Login() {


    return (
      <div className="App">
      <Row>
      <Col span={32}></Col>
      </Row>
    <Row>
      <Col span={8}>
      <Card style={{ width: 600 }} >
      <Title> Login </Title>
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {/* <Checkbox>Remember me</Checkbox> */}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
    </Card>
      </Col>
      <Col span={8}></Col>
      <Col span={8}></Col>
    </Row>
      
      </div>
    );
  }
  
  export default Login;
  