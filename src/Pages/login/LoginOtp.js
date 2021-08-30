import React,{useState} from "react";
import "./login.css";
import logo from "../../Assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from 'axios';

const LoginOtp = (props) => {
	const [loginData,setLoginData]=useState({mobile:'',otp:''});
	// const[response,setResponse]=useState('');

	const handleChange=(e)=>{
		const {name,value}=e.target;
setLoginData({...loginData,[name]:value});
console.log(loginData);
	}

	const handleSubmit = (e) => {
    e.preventDefault();
   

   
    // const newData={
    // 	name:loginData.mobile,
    // 	job:loginData.otp
    // }
    // console.log(newData);
    // axios({
    //   method: "delete",
    //   url: "/api/users/2",
    //   // data:newData
    // })
     axios({
      method: "post",
      url: "/t/elesc-1628078529/post",
      data:loginData
    })
      .then((response) => {
        console.log(response);
        })       
      .catch((error) => {
        console.log(error);
      });
  };
	return (
		<div className="login-wrapper">
			<img className="logo" src={logo} alt="Logo" />
			<div className="login-form-wrapper">
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={loginData.mobile} name="mobile" placeholder="Enter mobile" />
				<button>Get OTP</button>
				<input type="text" onChange={handleChange} value={loginData.otp} name="otp" placeholder="Enter OTP" />
				<input  type="submit" value="Login"/>
			</form>
			</div>
			<div className="login-link">Login with Password?<Link to="login">click here</Link></div>
			<div className="login-link">New Customer<Link to="register">click here</Link></div>
		</div>




	);
};
export default LoginOtp;
