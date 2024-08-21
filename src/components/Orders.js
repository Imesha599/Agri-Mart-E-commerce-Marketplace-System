import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Orders(){

const navigate = useNavigate();
const [posts,setPosts]=useState([]);
const navigateToConfirmed= (post) =>{
  navigate(`/confirmed`, { state: post}); // here we will redirect user and send your data into state
}


useEffect(()=>{
  axios.get("http://localhost:8080/list")
  .then(res => {
    
    setPosts(res.data)
})
.catch(err=>{
  console.log(err)
})
},[])

   return (
      <div>
         
       
            <div>
            <h3 className="text-left" style={{padding: "20px 0px"}}>Pending Orders</h3>
          <table className="table table-striped">
            <thead class="table-light">
                    <tr>
                        
                       <td>Order Id</td>
                        <td>Customer Id</td>
                        <td>Address</td>
                        <td>Delivery Agent</td>
                        <td style={{textAlign:"center;"}}>Confirm Order</td>
                        </tr>
                </thead>
                <tbody>
               {
                 posts.map
                    (post=>(
                    <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.sellerId}</td>
                    <td>{post.address}</td>
                    <td> 
                    
      
 
  <div class="dropdown">

  <select  class="form-select form-select-sm mb-1" aria-label=".form-select-lg example">
  <option selected><strong> Delivery Agent</strong> </option>
  <option value="1">Agent A</option>
  <option value="2">Agent B</option>
  <option value="3">Agent C</option>
</select>
    
 
</div>
</td>
<td><button onClick={()=>navigateToConfirmed(post)}> Send to RTS </button></td>
 </tr>
))

          }
          </tbody>
          </table>
                      
                    
      
        </div>
        </div>

      )
    }
  
export default Orders;