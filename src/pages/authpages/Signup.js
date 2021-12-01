import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card , Typography,Alert } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
// import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../fb_auth/firebase-config';
import {useAuth} from '../../authContext/AuthContext'
const { Title } = Typography;

 function Signup() {

  const [RegisterEmail,setRegisterEmail] = useState("")
  const [RegisterPassword,setRegisterPassword] = useState("")
  const [error,setError] = useState("")
  const [Loading,setLoading] = useState(false)
//   const RegisterHandler = async (e) => {
//    try{
//      const user = await createUserWithEmailAndPassword(auth, RegisterEmail, RegisterPassword);
//     console.log('RegisterEmail', user);

//    }
//    catch(e){
//      console.log(e.message);
//    }
//   }
const {register} = useAuth();

const handleSignup = async () => {
  // if(RegisterPassword.length < 8){
  //   return setError("Password can't be less than 8");
  // }
  try{
    console.log('tryblock ', RegisterEmail);
    setError('')
    setLoading(true)
      await  register(RegisterEmail, RegisterPassword)
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
      <Title> Signup </Title>
     {error && <Alert message={error} type="error" />}
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
        <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" onChange={(e)=>setRegisterEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        // name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password" onChange={(e)=>setRegisterPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item
        // name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {/* <Checkbox>Remember me</Checkbox> */}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSignup} disabled={Loading} className="login-form-button" >
          SignUp
        </Button>
        <br/>
        {/* <Link to="/login">Login</Link> */}
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
  
  export default Signup;
  