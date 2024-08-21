import React, { useState, useEffect } from "react";
import AgriMartFarmerNavBar from "../../components/AgriMartFarmerNavBar/AgriMartFarmerNavBar";
import "./AgriMartFarmerProductManagement.css";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'antd/dist/antd.css';
// import { Button } from 'react-bootstrap';
import { Button, notification } from "antd";

function AgriMartFarmerProductManagement(props) {
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
        <AgriMartFarmerNavBar />
      </div>

      <h2 class="txt-header">Product Management</h2>
      <div class="button-style">
        <Link to="/addproduct">
          <Button type="primary" colour="green">
            Add New Product
          </Button>
        </Link>
      </div>

      <div class="table-style">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.productId}</td>
                <td>{item.productTitle}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <Button
                  onClick={() => onUpdate(item)}
                  type="primary"
                  colour="green"
                >
                  <i class="bi bi-pencil" style={{color:"black"}}></i>
                </Button>
                <Button
                  onClick={() => onDelete(item.productId)}
                  loading={isLoading}
                  type="primary"
                  danger
                >
                  Delete 
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div>
        <AgriMartFooter />
      </div>
    </div>
  );
}

export default AgriMartFarmerProductManagement;
