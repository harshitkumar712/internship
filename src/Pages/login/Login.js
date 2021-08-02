import React,{useState}from 'react';
import './login.css';
import logo from '../../Assets/images/logo.png';
import {Link} from 'react-router-dom';
import Authentication from '../../Auth/Authentication';

const Login =(props)=>{
	const [loginData,setLoginData]=useState({username:'',password:''});
	const handleSubmit=(e)=>{
   e.preventDefault();
   console.log("submitted");
   const{username,password}=loginData;
   if(username==="123"&&password==="123"){
   		props.history.push("/home");

   Authentication.handleLogin(loginData);
   }
   else
   	console.log("wrong credentials");
   
	}
	const handleChange=(e)=>{
		const {name,value}=e.target;
setLoginData({...loginData,[name]:value});
console.log(loginData);
	}
	return(
		<div className="login-wrapper">
			
			<img className="logo" src={logo} alt="Logo" />
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} name="username" value={loginData.username} placeholder="Enter mobile number or email"/>

				<input type="password" onChange={handleChange} name="password" value={loginData.password} placeholder="Enter password"/>
				<input type="submit" value="Login"/>
			</form>
			Login with OTP?<Link to="loginotp">click here</Link>
			New Customer<Link to="register">click here</Link>
		</div>
		)
}
export default Login;