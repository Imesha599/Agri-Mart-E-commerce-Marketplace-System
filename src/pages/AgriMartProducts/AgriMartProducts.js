import React, { useEffect, useState } from "react";
import axios from "axios";
import Itemcard from "../../components/AgriMartCartComponents/Itemcard";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
import { axiosInstance } from '../../services';

import { Card, Row, Col, Container } from "react-bootstrap";
import { withCurrentUserContext } from '../../context/UserContext';
import "./AgriMartProduct.css";

const Productpg = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const navigateToConfirmed = (post) => {
    navigate(`/confirmed`, { state: post }); // here we will redirect user and send your data into state
  };

  const [searchOption, setSearchOption] = useState();
  const [filterOption, setfilterOption] = useState();

  useEffect(() => {
    axiosInstance.get('/getProducts', {params: searchOption})
    .then((res) => {
      console.log(res.data);
      setPosts(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [searchOption]);

  //-----------Get All Products
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/products", {params: searchOption})
  //     .then((res) => {
  //       console.log(res.data);
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [searchOption]);

  

  return (
    <>
        <div>
          <Header onChange={setSearchOption} />
        </div>
      <Row className="productRow">
              {posts.map((item, index) => {
                return (
                  <Itemcard
                    img={item.img}
                    title={item.productTitle}
                    description={item.description}
                    quantity={item.quantity}
                    price={item.price}
                    item={item}
                    key={item.productId}
                  />
                );
              })}
              </Row>

            <AgriMartFooter/>
    </>
  );
};

export default (Productpg);
