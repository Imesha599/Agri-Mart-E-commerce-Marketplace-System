import React from "react";
import './AgriMartProfile.css';
import AgriMartProfileNavBar from "../../components/AgriMartProfileNavBar/AgriMartProfileNavBar";
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {
  Button,
  Form,
  Row,
  Col,
  Input,
  message,
  InputNumber,
  Select,
  Modal,
  Space,
  notification,
} from "antd";
import {Table} from "react-bootstrap";
import FormItem from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";
import { Tabs } from 'antd';
import { Card } from 'antd';
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


//---------Card
const { Meta } = Card;

//---------Model
const [visible, setVisible] = useState(false);

//---------- Validation
const requiredValidation = [{ required: true, message: "Required" }];

//----------Succsess Message
const key = 'updatable';

const success = () => {
  message.loading({ content: 'Loarding',
  className: 'custom-class',
  style: {
    marginTop: '20vh',
  }, 
});
  setTimeout(() => {
    message.success({ content: 'Success',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    }, });
  }, 3600);
};




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


  return (
    <div className="profile">
       <div>
        <AgriMartProfileNavBar />
      </div>
      <div className='py-9'>
        <div className='container'>
          <Card className="profileCard1">
          <Row className="profileRow" gutter={[8, 8]}>
            <Col span={12}>
              <div className="profile-card">
                <Card 
                  hoverable
                  style={{
                    width: 340,
                    Height: 340,
                  }}
                  size="small" title="My Details" extra={<a href="#"><ModeEditIcon className="editIcon" onClick={() => setVisible(true)}></ModeEditIcon></a>}>
                    <Modal
                      // title="Modal 900px width"
                      centered
                      visible={visible}
                      onOk={() => setVisible(false)}
                      onCancel={() => setVisible(false)}
                      width={700}
                      >
                <div>
                  <div class="form-style">
                  <Form 
                  form={form}
                    onFinish={onUpdate}
                    layout="vertical"
                    labelCol={{ flex: "110px" }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    style={{borderRadius: '1px'}}
                  >
                    <FormItem
                      label="Name"
                      name="name"
                      required
                      rules={requiredValidation}
                    >
                      <Input maxLength={50}
                      style={{borderRadius: '1px'}}/>
                    </FormItem>

                    <FormItem
                      label="UserName"
                      name="userName"
                      required
                      rules={requiredValidation}
                    >
                      <Input maxLength={50}/>
                    </FormItem>

                    <Row gutter={8}>
                         

                    <Col md={8}>
                            <FormItem label="New Password" name="newPassword" 
                             rules={[{ required: true, message: 'Please add a password' },
                             { min: 8, message: 'Password must have a minimum length of 8' },
                             {
                                 pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
                                 message: 'Password must contain at least one lowercase letter, uppercase letter, number, and special character'
                             }]}
                             >
                              <Input type="password" size="large" placeholder="********" />
                            </FormItem>
                          </Col>

                          <Col md={8}>
                            <FormItem label="Confirm Password" name="confirmPassword" 
                             rules={[{ required: true, message: 'Please verify your password' },
                             {
                              pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
                              message: 'Please verify your password'
                          }
                        ]}
                             >
                              <Input type="password" size="large" placeholder="********" />
                            </FormItem>
                          </Col>
                        </Row>

                    <FormItem
                        label="E mail"
                      name="email"
                      required
                      rules={requiredValidation}
                    >
                       <Input type="email" />
                    </FormItem>

                   
                    <FormItem
                          label="Phone Number"
                          name='Phone Number'
                          placeholder = "+94"
                          required
                          rules={[
                            { 
                              required: true, 
                              message: 'Please input your phone number!' 
                            },   
                            {
                              pattern: /^(?:\d*)$/,
                              message: "Value should contain numbers",
                            },
                            {
                              pattern: /^[\d]{9,10}$/,
                              message: "Enter 10 digits phone number",
                            },
                          
                          ]}
                          validateTrigger="onBlur"
                        >
                          <InputNumber className="w-100" />
                        </FormItem>
                        <FormItem
                        label="E mail"
                      name="email"
                      required
                      rules={requiredValidation}
                    >
                       <Button onClick={success}> Update</Button>
                    </FormItem>
                  </Form>
                </div>  
              </div>
                    </Modal>
                      <p>np_Store</p>
                      <p>Navodya Siriwardhana</p>
                      <p>0718028512</p>
                      <p>sgdfhg@gmail.com</p>
                </Card>
              </div>
              </Col>

              <Col span={12}>
                <div className="profile-card">
                  <Card 
                    hoverable
                    style={{
                      width: 340,
                      Height: 240,
                    }}
                    size="small" title="Small size card" extra={<a href="#">More</a>}>
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                  </Card>
                </div>
              </Col>
          </Row> </Card>

         
          <div className='profileRow2'>
         
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
      <div>
        <AgriMartFooter/>
      </div>
    </div>
  );
}

export default AgriMartProfile;