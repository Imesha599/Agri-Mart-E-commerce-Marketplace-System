import React from "react";
import AgriMartProfileNavBar from "../../components/AgriMartProfileNavbar/AgriMartProfileNavbar";
// import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Button,Form,Row,Input,InputNumber,Select,Space,notification,} from "antd";
import {Card,Table} from "react-bootstrap";
import FormItem from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";
import { Tabs } from 'antd';
import { withCurrentUserContext } from '../../context/UserContext';
const { TabPane } = Tabs;

function AgriMartProfile(props) {

    useEffect(() => {
        setProductId(props.id);
        console.log("Id-------", productId);
        // Update the document title using the browser API
        getOneProduct();
      }, []);

  // const [productTitle, setProductTitle] = useState("");
  // const [category, setcategory] = useState("");
  // const [description, setdescription] = useState("");
  // const [quantity, setquantity] = useState("");
  // const [price, setprice] = useState("");
  // const [message, setMessage] = useState("");


   const [productId, setProductId] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  const { state } = useLocation();


  useEffect(() => {
    if(state){
      form.setFieldsValue(state);
    }
  }, [state]);
  
  let getOneProduct = (productId) => {
    axios({
      method: "get",
      url: `http://localhost:8080/products/${productId}`,

    })
      .then((res) => {
          console.log('Edit result',res);
          console.log('data----',res.data);
        notification.success({
          message: "Product Updated Successfully",
        });
        form.resetFields()
        setIsLoading(false);
      })

      .catch((error) => {
      });
  };

  const { id } = useParams();
  const navigate  = useNavigate();
  let onUpdate = (body) => {
    axios.put(`http://localhost:8080/products/${id}`, body)
      .then((res) => {
        navigate('/management');
        console.log("updateTODATa-----", res.data);
        notification.success({
          message: "Product Updated Successfully",
        });
        
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const requiredValidation = [{ required: true, message: "This Field is Required" }];

  return (
    <div>
      <div className='py-6'>
        <div className='container'>
          <div className='row'>
              <div className='col-md-5'>
            
      <div>
        <AgriMartProfileNavBar />
      </div>

      <div>
        <h2 class="txt-header">Edit Profile</h2>
        <div class="form-style">
          <Form 
          form={form}
            onFinish={onUpdate}
            layout="vertical"
            labelCol={{ flex: "110px" }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
          >
            <FormItem
              label="Name"
              name="name"
              required
              rules={requiredValidation}
            >
              <Input maxLength={50}/>
            </FormItem>

            <FormItem
              label="UserName"
              name="userName"
              required
              rules={requiredValidation}
            >
               <Input maxLength={50}/>
            </FormItem>

            <FormItem
              label="Email"
              name="description"
              required
              rules={requiredValidation}
            >
              <Input maxLength={50}/>
            </FormItem>

            <FormItem
              label="Phone Number"
              name="phoneNumber"
              required
              rules={requiredValidation}
            >
              <Input maxLength={50}/>
            </FormItem>

            <Space>
              <Button  loading={isLoading} htmlType="submit" type="primary">
                Submit
              </Button>
              <Link to="/management">
                  <Button ohtmlType="cancel">Discard</Button>
                </Link>
            </Space>
          </Form>
        </div>
      </div>
      {/* <div>
        <AgriMartFooter />
      </div> */}
 
              </div>
              <div className='col-md-7'>
              <div className='col-md-'>
              <Tabs type="card">
                        <TabPane tab="My Orders" key="2">
                            <div class="table-style">
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Order Id</th> 
                                        <th>Product Id</th>
                                        <th>Product Title</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>     
                                        </tr>
                                        <tr>
                                        <td>O324</td>
                                        <td>P234234</td>
                                        <td>Carrot</td>
                                        <td>32</td>
                                        <td>Rs. 5400</td> 
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </Table>
                            </div>
                        </TabPane>
                        {/* <TabPane tab="Commercial Bank" key="3">
                            <div class="table-style">

                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Name</th> 
                                        <th>Account Number</th>
                                        <th>Branch</th>    
                                        </tr>
                                        <tr>
                                        <th>S.M.D.P Perera</th> 
                                        <th>1035654</th>
                                        <th>Maharagama</th>    
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </Table>

                            </div>

                        </TabPane> */}
                    </Tabs>                     
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withCurrentUserContext(AgriMartProfile);