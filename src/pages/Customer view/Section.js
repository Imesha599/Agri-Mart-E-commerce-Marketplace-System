import React from 'react';
import "./Customer.css";

function Section(){
    return(
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
    )
}
 export default Section;