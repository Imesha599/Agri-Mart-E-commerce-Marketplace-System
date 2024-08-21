import React from 'react';
import { useState, useEffect } from "react";
import AgriMartAdminNavBar from '../../components/AgriMartAdminNavBar/AgriMartAdminNavBar';
 import './AdminUserManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import AgriMartAdminSideBar from '../../components/AgriMartSideBar/AgriMartSideBar';
import { Table } from "react-bootstrap";
import { Tabs, Popconfirm } from 'antd';
import moment from 'moment';
import { QuestionCircleOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit  } from "react-icons/ai";

const { TabPane } = Tabs;
function AdminUserManagement() {
    const [data, setData] = useState([]);
    
    return (
        <div>
        <div>
            <AgriMartAdminNavBar />

        </div>
       
        <div>
                <h2  class="txt-header">User Management</h2>
            </div>
            <div style={{float:'left', position:'fixed'}}><AgriMartAdminSideBar/></div>
                <div className="card-container" style={{margin:'0px 100px 0px 210px', position:'relative'}} >
                    <Tabs type="card">
                        <TabPane tab="Shopper" key="1">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Shopper ID</th>
                                            <th>shopper Name</th> 
                                            <th>Email Address</th>
                                            <th>Contact Number</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                          <td>0001</td>
                                          <td>S.T.Gunatilake</td>
                                          <td>samangunatilake@gmail.com</td>
                                          <td>072 345 6789</td>
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
                        <TabPane tab="Seller" key="2">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Seller ID</th>
                                            <th>Seller Name</th>
                                            <th>Email Address</th>
                                            <th>Contact Number</th>
                                            <th>Product ID</th>
                                            <th>Product Name</th>
                                            <th>Action</th>

                                        </tr>
                                        <tr>
                                          <td>0002</td>
                                          <td>B.T.Fernando</td>
                                          <td>btfernando@gmail.com</td>
                                          <td>075 234 9876</td>
                                          <td>0003</td>
                                          <td>Cabbage</td>
                                          <td><AiFillDelete/>  <AiOutlineEdit /></td>
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

                        <TabPane tab="Delivery Person" key="3">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Delivery Person ID</th>
                                            <th>Delivery Person Name</th>
                                            <th>Email Address</th>
                                            <th>Contact Number</th>
                                            <th>Action</th>

                                        </tr>
                                        <tr>
                                          <td>0002</td>
                                          <td>E.G.Kurey</td>
                                          <td>kurey@gmail.com</td>
                                          <td>075 234 9876</td>
                                          <td><AiFillDelete/>  <AiOutlineEdit /></td>
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
            <AgriMartFooter/>

        </div>

    </div>

      );
}

export default AdminUserManagement;