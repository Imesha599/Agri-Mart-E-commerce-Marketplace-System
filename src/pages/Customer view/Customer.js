import React from 'react';
import NavBar from '../../components/NavBar';
import  'bootstrap/dist/css/bootstrap.min.css';
import "./Customer.css";


import  { useState,useEffect,Link } from "react";
import axios from 'axios';


function Customer()  {
  const [details,setDetails]=useState([]);

    useEffect(()=>{
      axios.get("http://localhost:8080/deliveryDetails")
      .then(res => {
        
        setDetails(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
    },[])
  

    return (
      <div>
          <NavBar/>

          <h3 className="text-left" style={{padding: "20px 0px"}}>My Orders</h3>
<table className="table table-striped">
  <thead class="table-light">
    <tr>
          <td>Order<br/> Id</td>
          <td>Seller<br/>Id</td>
       
          <td>Total<br/>Amount</td>
          <td>Payment<br/>Type</td>
          <td>Date of<br/>Order</td>
          <td>View Details</td>
     </tr>
  </thead>
  <tbody>
  {
                 details.map
                    (detail=>(
                    <tr key={detail.orderId}>
                    <td>{detail.orderId}</td>
                  
                    <td>{detail.sellerId}</td>
                 
                    <td>{detail.totalAmount}</td>
                    <td>{detail.paymentType}</td>
                    <td>{detail.dateOfOrder}</td>
                    
                    
                   
                    <td><button type="button" class="btn btn-success" style={{marginLeft:"0px"}}>View Details</button></td>

          </tr>
                    ))}
                    </tbody>
  
        </table>

        <div class="container p-5 my-5 bg-dark text-white" style={{width: "70rem"}}>
         </div>
        
     <div id="go">
         <div class="div1" style={{ background: "linear-gradient(#B4FF9F, #4B8673)" }}>
           <h5>Seller Details</h5><br></br>
           <h6>Seller Id :</h6><br></br>
           <h6>Contact No :</h6><br></br>
           
         </div>
        
         <span class="div3" style={{ background: "linear-gradient(#B4FF9F, #4B8673)" }}>
         <h5>Package Information:</h5><br></br>
         <h6>Tracking No :</h6><br></br>
         <h6>Delivery Type :</h6><br></br>
         <h6>Customer Order Creation :</h6><br></br>
         <h6 >Estimated delivery time :</h6><br></br>
        </span>

         <div class="div2" style={{ background: "linear-gradient(#B4FF9F, #1B2430)" }}>
         <h6 class="h51">Your parcel has been delivered</h6><br></br>
         <h6 class="h51">Your parcel is our for delivery from logistic premise</h6><br></br>
         <h6 class="h51">Your parcel is dispatched</h6><br></br>
         <h6 class="h51">Your parcel has been packed</h6>
         
       
        
      </div>
                    </div>
         </div>


     
    )
  }


export default Customer;
