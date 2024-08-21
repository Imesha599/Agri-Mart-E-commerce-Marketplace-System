import React, { useState,useEffect } from "react";
import axios from 'axios';
import { axiosInstance } from '../../services/index';

function Onpre(){
  const [details,setDetails]=useState([]); 
  useEffect(()=>{
    axios.get("http://localhost:8080/getorder")
     //axios.get("http://localhost:8080/getorder")
    .then(res => {
      console.log(res.data);
      setDetails(res.data)
  })
  .catch(err=>{
    console.error(err)
  })
  },[])
  console.log("re-rendered");

return(
    <div id="pre">
<h3 className="text-left" style={{padding: "20px 0px"}}>Orders are on premise </h3>

<table className="table table-striped">
  <thead class="table-light">
    <tr>
    
                                            <th>Order ID</th>
                                            <th>Order Date</th>
                                            <th>Product Title</th>
                                            <th>Quantity</th>
                                            <th>Total Amount</th>
                                            <th>Delivery Status</th>
                                        </tr>

        
  </thead>
  <tbody>
  {
                 details.map
                    (detail=>(
                    <tr key={detail.orderId}>
                    <td>{detail.orderId}</td>
                    <td>{detail.orderDateTime}</td>
                    <td>{detail.productTitle}</td>
                    <td>{detail.quantity}</td>
                    <td>{detail.amount}</td> 
                  
                    
                    
                   
          <td><button type="button" class="btn btn-success" style={{marginLeft:"0px"}}
          onClick={async(e)=>{
            try{
             var url=`http://localhost:8080/delivery/${detail.orderId}`
             var result=  await axiosInstance.put(url,{"dStatus":detail.dStatus});
            await  axios.get("http://localhost:8080/getorder")
            .then(res => {
              console.log(res.data);
              setDetails(res.data)
          })
             console.log(result);
            }catch(e){
              console.log(e);
            }
          }}>Create delivery</button></td>
        {/* <td><button type="button" class="btn btn-success" style={{marginLeft:"0px"}}>Send Notification</button></td> */}

          </tr>
                    ))}
                    </tbody>
         
</table>
  </div>
);
}

export default Onpre;