import React, { useState, useEffect } from "react";
import AgriMartAdminNavBar from "../../components/AgriMartAdminNavBar/AgriMartAdminNavBar";
import "./AdminProductManagement.css";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
import AgriMartAdminSideBar from '../../components/AgriMartSideBar/AgriMartSideBar';
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'antd/dist/antd.css';
import { Button, notification } from "antd";
import { Tabs, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit  } from "react-icons/ai";

const { TabPane } = Tabs;

function AdminProductManagement(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productId, setProductId] = useState();
  
  useEffect(() => {
    getAllProducts();
  }, []);

  

  let getAllProducts = (e) => {
    try {
      axios({
        method: "get",
        url: "http://localhost:8080/products",
      })
        .then((res) => {
          console.log("result", res);
          console.log("data", res.data);
          setData(res.data);
          console.log("data-array", data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();
  let onUpdate = (item) => {
    const { productId: id } = item;

    navigate("/editproduct/" + id + "/", { state: item });

    console.log("ID----", id);
    
  };

  let onDelete = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:8080/products/${id}`,
    })
      .then((res) => {
        notification.success({
          message: "Product Deleted Successfully",
        });
        setIsLoading(false);
      })
      .catch((error) => {
        notification.error({
          message: "Something Went Wrong",
        });
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div>
        <AgriMartAdminNavBar />
      </div>

      <h2 class="txt-header">Product Management</h2>
      <div style={{float:'left', position:'fixed'}}><AgriMartAdminSideBar/></div>
                <div className="card-container" style={{margin:'0px 100px 0px 210px', position:'relative'}} >
                    <Tabs type="card">
                        <TabPane tab="In Stock" key="1">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Product ID</th>
                                            <th>Product Name</th> 
                                            <th>Quantity</th>
                                            <th>Seller</th>
                                            <th>Total Price</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                          <td>0001</td>
                                          <td>Carrot</td>
                                          <td>25KG</td>
                                          <td>M.T.Silva</td>
                                          <td>Rs.9500</td>
                                          <td><Popconfirm
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
                      </Popconfirm></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{(item.orderId ?? "").substring(item.orderId.length - 4).toUpperCase()}</td>
                                                    {/* <td>{(item.orderId ?? "").substring(0, 4).toUpperCase()}</td> */}
                                                    <td>{moment(item.orderDateTime).format('LLLL')}</td>
                                                    <td>{item.productTitle}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.amount}</td>
                                                    <button className='btn btn-primary form-control' style={{color:"black", backgroundColor:"#51bbfc", borderColor:"#51bbfc"}}  type="submit">RTS</button>
                                                    {/* <td>{item.price}</td> */}

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </div>
                        </TabPane>
                        <TabPane tab="Out of Stock" key="2">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Product ID</th>
                                            <th>Product Name</th>
                                            <th>Uploaded By</th>
                                        </tr>
                                        <tr>
                                          <td>0002</td>
                                          <td>Beans</td>
                                          <td>R.E.Perera</td>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {/* {
                                            data.map((item) => ( 
                                                <tr key={(item.id)}> 
                                                    <td>{(item.orderId ?? "").substring(0, 4).toUpperCase()}</td>
                                                    <td>{item.orderDateTime}</td>
                                                    <td>{item.productTitle}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.amount}</td>
                                                </tr>
                                            ))
                                        } */}


                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                        
                        
                    </Tabs>
                </div>

      <div>
        <AgriMartFooter />
      </div>
    </div>
  );
}

export default AdminProductManagement;
