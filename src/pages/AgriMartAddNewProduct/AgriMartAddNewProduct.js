import React from "react";
import AgriMartFarmerNavBar from "../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
// import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  notification,
} from "antd";
import FormItem from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";

function AgriMartAddNewProduct() {
  // const [productTitle, setProductTitle] = useState("");
  // const [category, setcategory] = useState("");
  // const [description, setdescription] = useState("");
  // const [quantity, setquantity] = useState("");
  // const [price, setprice] = useState("");
  // const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  let handleSubmit = (product) => {
    console.log(product);
    setIsLoading(true);

    axios({
      method: "post",
      url: "http://localhost:8080/products",
      data: product,
    })
      .then((res) => {
        notification.success({
          message: "Product Added Successfully",
        });
        form.resetFields();
        setIsLoading(false);
      })

      .catch((error) => {
        notification.error({
          message: "Something Went Wrong",
        });
        setIsLoading(false);
      });
  };

  const requiredValidation = [
    { required: true, message: "This Field is Required" },
  ];

  return (
    <div>
      <div>
        <AgriMartFarmerNavBar />
      </div>

      <div>
        <h2 class="txt-header">Add New Product</h2>
        <div class="form-style">
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            labelCol={{ flex: "110px" }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
          >
            <FormItem
              label="Product Title"
              name="productTitle"
              required
              rules={requiredValidation}
            >
              <Input maxLength={100} />
            </FormItem>
            <FormItem
              label="Category"
              name="category"
              required
              rules={requiredValidation}
            >
              <Select className="w-100">
                <option value={"Vegetables"}>Vegetables</option>
                <option value={"Fruits"}>Fruits</option>
                <option value={"Spices"}>Spices</option>
              </Select>
            </FormItem>
            <FormItem
              label="Product Description"
              name="description"
              required
              rules={requiredValidation}
            >
              <TextArea />
            </FormItem>
            <FormItem
              label="Quantity"
              name="quantity"
              required
              rules={requiredValidation}
            >
              <InputNumber min="0" className="w-100" />
            </FormItem>
            <FormItem label="Price" name="price" rules={requiredValidation}>
              <InputNumber min="0" className="w-100" />
            </FormItem>
            <Space>
              <Button loading={isLoading} htmlType="submit" type="primary">
                Save
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form>
        </div>
      </div>
      <div>
        <AgriMartFooter />
      </div>
    </div>
  );
}

export default AgriMartAddNewProduct;
