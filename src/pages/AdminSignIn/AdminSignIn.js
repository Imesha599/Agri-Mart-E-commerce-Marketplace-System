import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Admin from '../../resources/images/adminImg.png'
import { width } from '@mui/system';
import {Link} from 'react-router-dom';


  const onFinish = (values) => 
    console.log('Received values of form: ', values);
  

function AdminSignIn() {
  
  return (
  <>
    <div className='adminDiv'> 
       <React.Fragment>
        <div style={{height:'40px'}}></div>
      
      <Container className='adminDiv' style={{height:'620px', width: '600px', backgroundColor:'#DCDCDC',  borderRadius:'8px'}}>
      <Box sx={{ bgcolor: ' rgb(24, 24, 24', height: '95vh' }}>
        <img style={{marginLeft:'170px'}} src={Admin} width={250} height={250} />
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >

{/* Admin User Name */}
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input 
        style={{width: '400px', height:'50px', margin:'60px 0px 0px 100px', borderRadius:'8px'}}
        prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      {/* Password */}
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          style={{width: '400px', height:'50px', margin:'10px 0px 0px 100px', borderRadius:'8px'}}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <div style={{float:'right'}}>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      </div>

      <div style={{margin:'80px 0px 0px 215px '}}>
        <Form.Item>
          <Link to='/portal'>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{height:'50px', width:'100px', borderRadius:'10px'}}>
           <h4 style={{color:'white'}}> Log in</h4>
          </Button>
          </Link>
        </Form.Item>
      </div>
    </Form>
    </Box>
       
      </Container>
    </React.Fragment>
    </div>
    </>
  )
}

export default AdminSignIn
