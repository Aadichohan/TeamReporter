import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card , Typography } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../fb_auth/firebase-config';

import {AuthStateChange, AuthHandle} from '../../authHandler/AuthHandler';
import {useNavigate, Navigate} from 'react-router-dom'

import {useAuth} from '../../authContext/AuthContext'

import 'antd/dist/antd.css';
const { Title } = Typography;
function Login() {
  // AuthStateChange();
  // FBAuthHandler();
  // AuthHandle();
  const [LoginEmail,setLoginEmail] = useState("")
  const [LoginPassword,setLoginPassword] = useState("")
  const [error,setError] = useState("")
  const [Loading,setLoading] = useState(false)
  // const LoginHandler =  async () => {
  //   let navigate = useNavigate();
  //   try{
  //     // localStorage.setItem('isLoggedIn','true')
  //     const user = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
  //    console.log('Login ', user);
   
  //   // navigate("/")
  //   }
  //   catch(e){
  //     console.log(e.message);
  //   }
  // }
  const {login} = useAuth();
   const HandleLogin = async () => {
      let navigate = useNavigate();
 
    try{
      setError('')
      setLoading(true)
      await  login(LoginEmail, LoginPassword)
      console.log('tryblock ', LoginEmail);
     // navigate('/')
    }catch(e){
      if(e.code == 'auth/email-already-in-use'){
        setError("email-already-in-use")
      }
      else if(e.code == 'auth/weak-password'){
        setError("Password length should be atleast 6 ")
      }
      else{
        console.log('error ',e);
         setError(e.message)
  
      }
    }
    setLoading(false)
  }

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
        name={['user', 'email']} 
       label="Email" 
       rules={[{ type: 'email', required: true,
            message: 'Please input your Email!', }]}
      >
        <Input onChange={(e)=>setLoginEmail(e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
        <Input.Password  onChange={(e)=>setLoginPassword(e.target.value)} prefix={<LockOutlined className="site-form-item-icon" />}
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
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={HandleLogin}>
        Login
        </Button>
        <br/>
        <Link to="/signup">SignUp</Link>
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
  