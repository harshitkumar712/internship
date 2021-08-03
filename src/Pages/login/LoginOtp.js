import React from "react";
import "./login.css";
import logo from "../../Assets/images/logo.png";
import { Link } from "react-router-dom";

const LoginOtp = () => {
	return (
		<div className="login-wrapper">
			<img className="logo" src={logo} alt="Logo" />
			<div className="login-form-wrapper">
			<form>
				<input type="text" placeholder="Enter mobile number or email" />
				<button>Get OTP</button>
				<input type="text" placeholder="Enter OTP" />
				<input type="submit" value="Login"/>
			</form>
			</div>
			<div className="login-link">Login with Password?<Link to="login">click here</Link></div>
			<div className="login-link">New Customer<Link to="register">click here</Link></div>
		</div>




	);
};
export default LoginOtp;
