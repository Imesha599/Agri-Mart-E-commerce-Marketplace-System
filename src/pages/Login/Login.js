import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cardStyles } from "./StyleComponents";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";
import {Button} from 'antd';
import empImage from '../../resources/images/emp.jpg';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email_error, setEmail_error] = useState(false);
  const [password_error, setPassword_error] = useState(false);
  const [email_empty_error, setEmail_empty_error] = useState(false);
  const [password_empty_error, setPassword_empty_error] = useState(false);
  function validateEmail(email) {
    //var re = /\S+@\S+/;
    var re =
      /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
  }

  function validatepassword(password) {
    //var re = /\S+@\S+/;
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    return re.test(password);
  }

  const email_error_msg = <div style={{ color: "red" }}>Invalid email</div>;
  const password_error_msg = (
    <div style={{ color: "red" }}>Invalid password</div>
  );
  const email_empty_error_msg = (
    <div style={{ color: "red" }}>Email is required.</div>
  );
  const password_empty_error_msg = (
    <div style={{ color: "red" }}>Password is required.</div>
  );

  const navigate = useNavigate();
  const onSubmit = async ()=> {
      try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/");
      }catch(e){
            alert(e.message);
      }
      
  }

  return (
    <div>
    <div style={{marginLeft:'500px'}}>
    <Section>
      <div>
       
        <h1 style={{ textAlign: "center", marginTop: "3rem", color: "green" }}>
          {" "}
          Welcome to Agri Mart !
        </h1> <br /> <br />
        
        <div className="login_form">
          <h2>
            <b>LOG IN</b>
          </h2>
          <p>
            <b>Shopped with us before ? Log in with your details </b>
          </p>
          <br />
          <label for="email">User Name </label>
          <i class="fa fa-user"></i>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => {
              var val = validateEmail(e.target.value);
              setEmail_error(!val);
              console.log(val);
              setEmail(e.target.value);
            }}
          />
          {email_error ? email_error_msg : <></>}
          {email_empty_error ? email_empty_error_msg : <></>}
          <label for="password">Password</label>
          <i class="fa fa-lock"></i>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              var val = validatepassword(e.target.value);
              setPassword_error(!val);
              setPassword(e.target.value);
              console.log(password);
            }}
            id="pwd1"
          />
          {password_error ? password_error_msg : <></>}
          {password_empty_error ? password_empty_error_msg : <></>}
          <div>
            <p style={{ textAlign: "right", margineleft: "6rem" }}>
              Forgot password ?
            </p>
            <button
              type="Submit"
              id="submutt"
              className="submit_btn"
              onClick={(e) => {
                if (password == "") {
                  console.log("password is empty.");
                  setPassword_error(false);
                  setPassword_empty_error(true);
                  setEmail_error(false);
                  setEmail_empty_error(true);
                  return;
                }
                onSubmit();
              }}
            >
              Log in
            </button>
          </div>
          <br />
          <p style={{ textAlign: "center" }}>
            Don't have an Account ?{" "}
            <b>
              <Link to="/register">
                {" "}
                <u> Sign Up</u>{" "}
              </Link>{" "}
            </b>{" "}
          </p>
        </div>
      </div>
    </Section>
    </div>
    <Link to='/adminSignin'>
    <Button shape="circle" style={{height:'70px', width:'70px', float:'right', marginRight:'40px'}}><img  style={{height:'60', width:'60px', borderRadius:'50%'}} src={empImage}/></Button>
    </Link>
    </div>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  align-items: center;
`;
