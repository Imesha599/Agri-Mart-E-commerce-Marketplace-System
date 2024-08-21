import React, { useState, useEffect } from 'react';
import AgriMartAdminNavBar from '../../components/AgriMartAdminNavBar/AgriMartAdminNavBar';
import './AdminOrderManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import AgriMartAdminSideBar from '../../components/AgriMartSideBar/AgriMartSideBar';
import 'antd/dist/antd.css';
import { Tabs, Popconfirm } from 'antd';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import { QuestionCircleOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit  } from "react-icons/ai";

const { TabPane } = Tabs;

function AdminOrderManagement() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getOrders();
    }, []);

    let getOrders = () => {
        try {

            axios({
                method: 'get',
                url: 'http://localhost:8080/orderdw'
            })
                .then(res => {
                    console.log('result', res);
                    console.log('data', res.data);
                    setData(res.data);
                    console.log('data-array', data)
                })
                .catch(error => {
                    console.log(error);
                });
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div>
                <AgriMartAdminNavBar />

            </div>
            <div>

                <h2 class="txt-header">Order Management</h2>
            </div>
            <div>
            <div style={{float:'left', position:'fixed'}}><AgriMartAdminSideBar/></div>
                <div className="card-container" style={{margin:'0px 100px 0px 210px', position:'relative'}} >
                    <Tabs type="card">
                        <TabPane tab="User ID" key="1">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th> 
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                            <th>Distribution</th>
                                            <th>Delivery Status</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                        <td>0001</td>
                                        <td>22.06.2022</td>
                                        <td>Carrot</td>
                                        <td>10KG</td>
                                        <td>RS.8500</td>
                                        <td>dd</td>
                                        <td>Pending</td>
                                        <td > <Popconfirm title="Are you sure？" okText="Yes" cancelText="No"><AiFillDelete className='deleteIcon'/>
  </Popconfirm> <AiOutlineEdit /></td>
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
                        
                        
                        
                    </Tabs>
                </div>
            </div>



            <div>
                <AgriMartFooter />

            </div>

        </div>

    );
}

export default AdminOrderManagement;