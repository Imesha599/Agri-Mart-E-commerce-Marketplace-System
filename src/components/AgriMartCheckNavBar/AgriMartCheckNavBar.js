import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Image } from 'react-bootstrap';
import './AgriMartCheckNavBar.css';
import logo from '../../resources/images/logo.png'
import { UserOutlined } from '@ant-design/icons';
import { Avatar,Dropdown, Menu, Space } from 'antd';
import { DownOutlined,SmileOutlined } from '@ant-design/icons';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label:
        <Link to="/CustomerProfile">
         npiumanthi31@gmail.com
        </Link>
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" >
            Navodya Piumanthi
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label:  <Link to="/register">
        Log Out
        </Link>,
      },
    ]}
  />
);
function AgriMartNavBar() {
  
       
    
    return (
        <Navbar class="nav-styles" collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                <Image src={logo} height={70} width={70} />
                 Agri Mart   </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                     <Nav.Link href='/portal'>Farmer Portal</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                   
                    </Nav>
                    <Nav>

                        
                        <div class="profile-style">
                           
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a onClick={e => e.preventDefault()}>
                                <Space>
                                <Link to="/CustomerProfile">
                            <Avatar size="large" icon={<UserOutlined />} />
                            </Link>
                                    <DownOutlined />
                                </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AgriMartNavBar;