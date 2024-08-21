import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Badge,
  Container,
  Nav,
  Navbar,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { withRouter } from "react-router-dom";
// import { useCart } from "react-use-cart";
import Cart from "../pages/AgriMartCart/AgriMartCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({ onChange }) => {
  //find assets by category

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  // const { totalUniqueItems } = useCart();

  useEffect(() => {
    if(onChange)
      onChange({keyword, category});
  }, [keyword, category]);
  
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      bg="dark"
      variant="dark"
      style={{ height: 80 }}
    >
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            type="search"
            placeholder="Search a product..."
            onChange={(e)=> setKeyword(e.target.value)}
          />
        </Navbar.Text>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="productId">
            Filter by Category
          </Dropdown.Toggle>

          <Dropdown.Menu onChange={(e)=> setKeyword(e.target.value)}>
            <Dropdown.Item href="#/action-2">Fruits</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Nav>
          <Dropdown alignRight>
            <Link to="/ToCart">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <span className="e-badge e-badge-secondary e-badge-notification e-badge-overlap leftTop">
                  77
                </span>
              </Dropdown.Toggle>{" "}
            </Link>

            {/* <Dropdown.Menu style={{ minWidth: 370 }}>
                    <span style={{minWidth:0}}>Cart is Empty </span>
                </Dropdown.Menu> */}
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
