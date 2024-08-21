import React from 'react';
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import './AgriMartHome.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function AgriMartHome() {

  return (
    <div> 
      <div>
      <AgriMartNavBar/>
      </div>
       
    <div class="cnt">
    <h1 class="text-header" >Welcome To Agri Mart!</h1>
    <h3 class="text-content">Agricultural E-Commerce</h3>
    <h3 class="text-content"> Marketplace</h3>
    <div class="btn-style">
    <Link to="/signin"><Button  variant="outline-secondary">Shop Now</Button></Link>
    </div>
    
    </div>
    
      
    <AgriMartFooter/>
  
    
    </div>
  

  );
}