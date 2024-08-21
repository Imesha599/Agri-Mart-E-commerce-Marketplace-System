import React, { useState } from "react";
import { Form,} from "react-bootstrap";
import Login from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useForm } from "react-hook-form";
import { cardStyles } from "./StyleComponents";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { axiosInstance } from "../../services";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../../config/FirebaseConfig";
// import {AutoComplete,Button,Cascader,Checkbox,Col,Form,Input,InputNumber,Row,Select,} from 'antd';
// import React, { useState } from 'react';



export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [Gender, setgender] = useState("");
  const [password_error,setPassword_error] =useState(false);
  const [ConfirmPassword, setconfirmpassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [ConfirmPassword_error,setconfirmpassword_error] =useState(false);
  const [email_error,setEmail_error] =useState(false);
  const [phone_error,setPhone_error] =useState(false);
  const [name_error,setName_error] =useState(false);
  const [gender_error,setGender_error] =useState(false);
  const [password_empty_error,setPassword_empty_error] =useState(false);
  const [ConfirmPassword_empty_error,setconfirmpassword_empty_error] =useState(false);
  const [email_empty_error,setEmail_empty_error] =useState(false);
  const [phone_empty_error,setPhone_empty_error] =useState(false);
  const [name_empty_error,setName_empty_error] =useState(false);
  const [gender_empty_error,setGender_empty_error] =useState(false);
  const [password_mismatch_error,setPassword_mismatch_error] =useState(false);
  const [isChecked,setIsChecked] =useState(false);
  const [checkedMsg,setCheckedMsg] = useState(null);
  
//----------Validation
  const onSubmit = (data) => {
    console.log(data);
   
  };
  function validateEmail(email) 
  {
      var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      return re.test(email);
  }
  function validatepassword(password) 
  {
      var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      return re.test(password);
  }
  function validateConfirmPassword(ConfirmPassword) 
  {
      var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      return re.test(ConfirmPassword);
  }
  function validatePhone(phone) 
  {
      var re = /(\+\d{1,3}\s?)?((\(\d{3}\)\ys?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
      return re.test(phone);
  }
  

  const email_error_msg=<div style={{color:"red"}}>Invalid email</div>
  const password_error_msg=<div style={{color:"red"}}>Invalid password</div>
  const phone_error_msg=<div style={{color:"red"}}>Invalid Phone Number</div>
  const email_empty_error_msg=<div style={{color:"red"}}>Email is required.</div>
  const password_empty_error_msg=<div style={{color:"red"}}>Password is required.</div>
  const phone_empty_error_msg=<div style={{color:"red"}}>Phone is required.</div>
  const name_empty_error_msg=<div style={{color:"red"}}>Full Name is required.</div>
  const ConfirmPassword_empty_error_msg=<div style={{color:"red"}}>Confirm Password is required.</div>
  const gender_empty_error_msg=<div style={{color:"red"}}>Gender is required.</div>
  const navigate = useNavigate();


  
async function handleFormSubmit(e) {
    e.preventDefault();
    if(!isChecked){
      setCheckedMsg(<div style={{color:"red"}}>You must agree to the terms and conditions</div>);
      return;
    }
    try{
    const rst = await axiosInstance.post('/auth/register', {
      fullName: name,
      email: email,
      password: password,
      phoneNo: phone,
      gender: Gender
    });
    const customToken = rst.data;
        await signInWithCustomToken(auth, customToken);
        navigate("/");
    }catch(e){
        throw e;
    }
    if (!name || !email || !password || !phone || !Gender) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");
      toast.success('Registered success.');
      setTimeout(setLogin(!login),5000)

      //setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  
  }


  const password_mismatch_error_msg=<div style={{color:"red"}}>Password doesn't match.</div>
  
  
  return (   
    <div> 
     <ToastContainer/>
    <Section>




     
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              
               
               <h1 style={{textAlign:"center", marginTop:"-5rem"}}>Create Your Agri Mart Account !</h1>
               <div className="reg1">

              <div className="form-group">
                <label><br/>Full Name</label>
                <input
                  type="text"
                  
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="Name"
                  value={name}
                  onChange={(event)=>{
                    setName(event.target.value);
                  }}
                />
                {(name_empty_error)?name_empty_error_msg:<></>}  
              </div>

               <div className="form-group">
                <label>Phone Number</label>
                <input maxLength="12"
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact number"
                  onChange={(e)  => {
                    var val=validatePhone(e.target.value);
                    setPhone_error(!!!val);
                    console.log(val);
                    setPhone(e.target.value);
              }}  
                 
                  value={phone}
                />
                  {(phone_error)?phone_error_msg:<></>} 
              {(phone_empty_error)?phone_empty_error_msg:<></>}   
                </div>         
          
          <div className="form-group">
                <label>Gender</label>
                <Form.Control
                  as="select"
                  type="gender"
                  className="form-control"
                  onChange={(event) => {
                    setgender(event.target.value);
                  }
                  }
                  value={Gender}
                >
                   
                  <option value="" >Select Gender</option>
                  <option value="Male" >Male</option>
                  <option value="Female" >Female</option>
                </Form.Control>
                {(gender_empty_error)?gender_empty_error_msg:<></>}  
              </div>

              <div className="form-group">
                <br/>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e)  => {
                    var val=validateEmail(e.target.value);
                    setEmail_error(!!!val);
                    console.log(val);
                    setEmail(e.target.value);
              }}    
        
                    />
              {(email_error)?email_error_msg:<></>} 
              {(email_empty_error)?email_empty_error_msg:<></>}   
               
              </div>
            
              </div>
              <div className="reg">
              <div className="form-group">
            
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e)=> {
                    var val=validatepassword(e.target.value);
                    setPassword_error(!val);
                    setPassword(e.target.value);
                    console.log(password);
              }
               } id="pwd1"
                   />
                 {(password_error)?password_error_msg:<></>}
                 {(password_empty_error)?password_empty_error_msg:<></>}
                
              </div>

                <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="Password"
                  className="form-control"
                  placeholder="Enter password again"
                  value={ConfirmPassword}
                  onChange={(e)=> {
                    var val=validateConfirmPassword(e.target.value);
                    setconfirmpassword_error(!val);
                    setconfirmpassword(e.target.value);
                    console.log(ConfirmPassword);
              }
               }
                  
                />
                 
              {(ConfirmPassword_empty_error)?ConfirmPassword_empty_error_msg:<></>}   
                {(password_mismatch_error)?password_mismatch_error_msg:<></>}
              </div>
             <label>
             <input
             type = "Checkbox"
             onChange={(e)=>{setIsChecked(e.target.checked)}}
              value={isChecked}
             />
               I agree to the terms and conditions </label>
               {checkedMsg?checkedMsg:null}
            <div>
               
               <button type="submit" className="btn_btn" 
               onClick={(e)=>{
                setconfirmpassword_empty_error(!ConfirmPassword);
                setPassword_empty_error(!password);
                setEmail_empty_error(!email)
                setName_empty_error(!name);
                setPhone_empty_error(!phone);
                setGender_empty_error(!Gender);
                // if(password == ''){
                //       console.log('password is empty.')
                //       setPassword_error(false);
                //       setPassword_empty_error(true);
                //       setEmail_error(false);
                //       setconfirmpassword_error(false);
                //       setconfirmpassword_empty_error(true);
                //       setPhone_error(false);
                //       setPhone_empty_error(true);
                //       setName_error(false);
                //       setName_empty_error(true);
                //       setGender_error(false);
                //       setGender_empty_error(true);
                      
                // }
                console.log(password, ConfirmPassword);
                if(password !== ConfirmPassword){
                  setPassword_mismatch_error(true);
                }else{
                  setPassword_mismatch_error(false);
                }
               }}
               >
                    SIGN UP
              </button>
              
               <br/>  <br/>
               <b> Already have an Account ?  <Link to="/login"> LOG IN </Link>  </b>
              <p onClick={handleClick} className="forgot-password text-right">
               </p>
                 
              </div>
              </div>
            </form>
          ) : (
            <Login />
          )}
          </Section>
          </div>
  );
}
const Section = styled.section`
  ${cardStyles};
  display: flex-direction: column;  
  align-items: center;
  height:35rem;  
`;

