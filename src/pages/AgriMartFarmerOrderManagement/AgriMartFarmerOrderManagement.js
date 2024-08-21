import React, { useState, useEffect } from 'react';
import AgriMartFarmerNavBar from '../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar';
import './AgriMartFarmerOrderManagement.css';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';

const { TabPane } = Tabs;

function AgriMartFarmerOrderManagement() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getOrders();
    }, []);

    let getOrders = () => {
        try {

            axios({
                method: 'get',
                url: 'http://localhost:8080/getorder'
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
                <AgriMartFarmerNavBar />

            </div>
            <div>

                <h2 class="txt-header">Order Management</h2>
            </div>
            <div>
                {/* const App = () =&gt; ( */}
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="Pending Orders" key="1">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th> 
                                            <th>Quantity</th>
                                            <th>Total Amount</th>
                                            <th>Action</th>
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
                        <TabPane tab="Ready to Ship" key="2">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Total Amount</th>
                                            <th>Delivery Status</th>
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
                        <TabPane tab="Shipped" key="3">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Orders ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Total Amount</th>
                                            <th>Delivery Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* dynamic table */}
                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                        <TabPane tab="Delivered" key="4">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Orders ID</th>
                                            <th>Order Date</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Total Amount</th>
                                            <th>Delivery Status</th>
                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {/* dynamic table */}
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

export default AgriMartFarmerOrderManagement;