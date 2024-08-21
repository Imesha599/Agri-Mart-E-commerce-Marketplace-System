import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';
import "./AgriMartCart.css";
// import '@shapla/react-delete-icon/dist/delete-icon.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AgriMartCheckNavBar from '../../components/AgriMartCheckNavBar/AgriMartCheckNavBar';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Col, Input, InputNumber, Row, message, Select, Space, Card,Popconfirm } from "antd";
import { withCurrentUserContext } from '../../context/UserContext';
import { axiosInstance } from '../../services';


//----------------Corfirm Cart Item Deletion
const Cart =() =>{
  
  const { 
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [cartDetails, setCartDetails] = useState([]);
  useEffect(()=>{
    axiosInstance.get('/receiveToCart')
    .then(res => {
      console.log(res.data);
      setCartDetails(res.data)
  })
  .catch(err=>{
    console.error(err)
  })
  },[])

  return (
    <div className='cart'>
      <AgriMartCheckNavBar/>
      <Row className='cartRow'>
      <Col className='cartCol' span={10}> <div className='card'>
                  <div className='card-header'>
                  <h4>Cart</h4>
                  </div>
                  <div className='card-body'>
                    <table className='table table-light table-hover m-0'>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th></th>    
                      </tr>
                    </thead>                 
                    <tbody>
                    {cartDetails.map((item, index)=>{
                    return(
                    <>
                      <tr key={index}>
                      <td><img src={item.img} style={{height:'5rem',width:'5rem'}}/></td>
                      <td>{item.product.productTitle}</td>
                      <td>Rs. {item.totalPrice}</td>
                      <td>   
                      <div className='addbtn'><RemoveIcon  onClick={()=> updateItemQuantity(item.id, item.quantity - 1) } style={{height:'1rem', width:'1rem'}}/>
                      {item.quantity}
                      <AddIcon onClick={()=> updateItemQuantity(item.id, cartDetails.item + 1)} style={{height:'1rem', width:'1rem'}}/></div>
                      </td>
                      <td>
                      <Popconfirm
                        title="Are you sure？"
                        icon={
                          <QuestionCircleOutlined
                            style={{
                              color: 'red',
                            }}
                            // onOk={() => removeItem(item.id)}
                          />
                        }
                      ><button className='btn ms-2' >
                         <DeleteIcon className='deleteicon'/>
                       </button>
                      </Popconfirm>
                      </td>
                      </tr>
                    </>
                    )
                    })}
                    </tbody>
                    </table>
                  </div>
             
                  <Row className='cartButtons'>
                  <Col className='cartShopmoreBtn'><Link to="/ToProducts"><Button type='primary' >Shop More</Button></Link></Col>
                    <Col> <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                            <Button type='danger' 
                            // onClick={() => emptyCart()}
                            >Clear Cart</Button>
                          </Popconfirm>
                    </Col>   
                  </Row>
                </div>

                </Col>

                <Col className='cartCol2' span={10}>
                <div className='card' margin-top='50%'>
                <div className='card-header'>
                <h4>Order Summery</h4>
                </div>                  
                  <div className='card-body'>
                  
                    <table className='table table-light table-hover m-0'>
                    <tr className='trow'>
                    <td ><h5>Total Items</h5></td>
                    <td className='txright'><h5>{totalUniqueItems}</h5></td>
                    </tr>
                    <tr>
                    <td><h5>Total Price: </h5></td>
                    <td><h5>Rs. {cartTotal}.00</h5></td>
                    </tr>
                    </table>
                    <div className='col-md-6'>
                    <div className='from-group mb-3'>
                    <div> <Link to="/ToCheckout"><Button type="primary" className='btn btn-primary m-2'  Link to="/Checkout">Checkout</Button></Link></div> 
                    </div>
                    
                    </div>
                  </div>
              </div>    

      </Col>
     
    </Row>
    <div>
        <AgriMartFooter/>
      </div>
</div>
  ); 
}

export default withCurrentUserContext(Cart);

