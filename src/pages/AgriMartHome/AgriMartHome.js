import React from 'react';
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import './AgriMartHome.css';
import { Button } from 'react-bootstrap';
import { Carousel, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

//images - corousel
import land from '../../resources/images/land.jpg';
import spice from '../../resources/images/spice.jpg';
import veges from '../../resources/images/veges.jpg';
import output from '../../resources/images/delivery.jpg';

import fruits from '../../resources/images/fruits.jpeg';
import vege from '../../resources/images/vege.jpeg';
import spices from '../../resources/images/spices.jpeg';
import category from '../../resources/images/fruitsimg.jpg';


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


export default function AgriMartHome() {

  
  return (
    <div style={{backgroundColor:'#EEF3EB'}}> 
      <div>
        <AgriMartNavBar/>
      </div>
<div > <div style={{height:'20px', paddingTop:'100px'}}></div>
        {/* <h1 style={{textAlign:'center', fontWeight:'bold', fontFamily:'railway', paddingTop:'110px'}}>Welcome to Agri Mart </h1> */}

<div style={{ width:'100%', height:'550px'}}>
    
        <div>
        <Carousel autoplay={true} dotPosition='bottom'>
          <div>
            <img style={{height:'500px', width:'100%', marginTop:'20px', borderRadius:'0px'}} src={category}/>
          </div>
          <div>
            <img style={{height:'500px', width:'100%', marginTop:'20px', borderRadius:'0px'}} src={spice}/>
          </div>
          <div>
            <img style={{height:'500px', width:'100%', marginTop:'20px', borderRadius:'0px'}} src={veges}/>
          </div>
        
          </Carousel>
          </div>
 
</div>
       <div style={{paddingTop:'5px', alignContent:'center', textAlign:'center', fontFamily:'cursive'}}><h5>"Agri Mart" has 100% organic vegetables, fruits, and spices that suit Sri Lankan culture and lifestyle. We motivate our farmers to give us fresh and healthy food so that we can earn our customers' trust.</h5> </div>
    <div>

    <br></br>
      <Link to="/ToProducts">
        <Button  style={{width: "170px",height: "50px", marginLeft:'650px',color:'black', fontWeight:'bolder', borderColor:'#68BB59', fontSize:'22px'}} variant="success">Shop Now</Button>
      </Link>
    </div>
    <br/>   <br/>

    <Row justify='space-around'>
{/* Vegetables card */}

<Col span={6} style={{marginLeft:'40px'}}>
  <Link to='ToProducts'><Card style={{height: '400px', width:'310px', borderRadius:'10px', backgroundColor:'#001a00'}} >
    <Row><img style={{height: '300px', width:'260px', borderRadius:'10px'}} src={vege}></img></Row>
    <Row style={{height:'50px', width:'260px', backgroundColor:'#eeffe6',borderRadius:'0px 0px 10px 10px '}}><h3 style={{color:'black', fontWeight:'bolder', fontFamily:'serif', marginLeft:'50px'}}>Vegetables</h3></Row>
  </Card></Link>
</Col>

{/* fruit card */}
<Col span={6} style={{marginLeft:'40px'}}>
  <Link to='ToProducts'><Card style={{height: '400px', width:'310px', borderRadius:'10px', backgroundColor:'#001a00'}} >
    <Row><img style={{height: '300px', width:'260px', borderRadius:'10px'}} src={fruits}></img></Row>
    <Row style={{height:'50px', width:'260px', backgroundColor:'#eeffe6',borderRadius:'0px 0px 10px 10px '}}><h3 style={{color:'black', fontWeight:'bolder', fontFamily:'serif', marginLeft:'80px'}}>Fruits</h3></Row>
  </Card></Link>
</Col>

{/* spice card */}
<Col span={6} style={{marginLeft:'40px'}}>
  <Link to='ToProducts'><Card style={{height: '400px', width:'310px', borderRadius:'10px', backgroundColor:'#001a00'}} >
    <Row><img style={{height: '300px', width:'260px', borderRadius:'10px'}} src={spices}></img></Row>
    <Row style={{height:'50px', width:'260px', backgroundColor:'#eeffe6',borderRadius:'0px 0px 10px 10px '}}><h3 style={{color:'black', fontWeight:'bolder', fontFamily:'serif', marginLeft:'80px'}}>Spices</h3></Row>
  </Card></Link>
</Col>
    </Row>


  </div>
  <div style={{height:'80px'}}></div>
    
    </div>
  

  );
}