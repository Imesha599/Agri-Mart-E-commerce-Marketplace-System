import React from 'react'
import { useCart} from "react-use-cart"
import ReactStars from "react-rating-stars-component"




export const CustomerProfileCard = (props) => {

  return (
    <>
    {/* <AgriMartNavBar/> */}

    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
    <div style={{ width: '17rem'}} class="card p-50 overflow-hidden h-100 shadow">
        {/* <img src={props.img} class="card-img-top h-100 img-fluid"/> */}
            <div class="card-body">
                <h4 class="card-title">{props.id}</h4>
                <h5 class="card-title">Rs. {props.Name}</h5>
                <p class="card-text-bottom">{props.Email}</p>
                <p class="card-text-bottom">{props.Address}</p>
                <p class="card-text-bottom">{props.PostCode}</p>
                <p class="card-text-bottom">{props.PNo}</p>
             </div>
        </div>
    </div>
    </>
  );
};

export default CustomerProfileCard;

