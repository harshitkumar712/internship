import React from "react";
import "./login.css";
import logo from "../../Assets/images/logo.png";
import { Link } from "react-router-dom";

const LoginOtp = () => {
	return (
		<div>
			<img className="logo" src={logo} alt="Logo" />
			<form>
				<input type="text" placeholder="Enter mobile number or email" />
				<button>Get OTP</button>
				<input type="text" placeholder="Enter OTP" />
				<button>Login</button>
			</form>
			Login with Password?<Link to="login">click here</Link>
			New Customer<Link to="register">click here</Link>
		</div>
	);
};
export default LoginOtp;
