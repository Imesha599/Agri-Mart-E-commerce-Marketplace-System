import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {FaGem,FaHeart} from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import {RiMenu5Fill } from "react-icons/ri";

import 'react-pro-sidebar/dist/css/styles.css';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
//import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"; 
import {HashLink as Link } from 'react-router-hash-link';



function SideBar(){
  return(
  
  <ProSidebar >
  <Menu iconShape="square">
    <MenuItem icon={<FaGem />}><Link smooth to ="/delivery/#dash"/>Dashboard</MenuItem>
  <SubMenu title="Requests" icon={<FaHeart/>}>
       <MenuItem icon={<RiMenu5Fill />}><Link smooth to ="/delivery/#process"/>Processing</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}><Link smooth to ="/delivery/#pack"/>Packed</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}><Link smooth  to ="/delivery/#pre"/>On-Premise</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}><Link smooth to ="/delivery/#dis"/>Dispatched</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}><Link smooth  to ="/delivery/#way"/>On the way</MenuItem>
      <MenuItem icon={<RiMenu5Fill />}><Link smooth to ="/delivery/#del"/>Delivered</MenuItem>
     
</SubMenu>
    <MenuItem icon={<IoSettings />}><Link to ="/delivery/#set"/>Settings</MenuItem>
  </Menu>
</ProSidebar>
  );
}
export default SideBar;
