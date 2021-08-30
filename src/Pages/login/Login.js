import React,{useState,useEffect}from 'react';
import './login.css';
import logo from '../../Assets/images/logo.png';
import {Link} from 'react-router-dom';
import Authentication from '../../Auth/Authentication';
import VanillaTilt from 'vanilla-tilt';

const Login =(props)=>{
	const [loginData,setLoginData]=useState({username:'',password:''});
	const [errors,setErrors]=useState([]);

const tiltRef=React.useRef(0);

useEffect(()=>{
	const tiltNode= tiltRef.current;
	VanillaTilt.init(tiltNode,{
		max:30,
		speed:10,
		glare:true,
		'max-glare':.5,
	})
},[])
console.log(tiltRef);
const handleValidation=({username,password})=>{
	let errors =[];
	let error;
	
	if(handleEmptyField(loginData)){
       error ={message:'Fill all the fields'};
       setErrors(errors.concat(error));
       return false;
	}else if(username!=="123"||password!=="123"){
       error ={message:'Wrong credentials'};
       setErrors(errors.concat(error));
       return false;
	}
    
    else{
    	return true;
    }

}

const handleEmptyField=({username,password})=>{
	return !username.length ||  !password.length;
}
	const handleSubmit=(e)=>{
   e.preventDefault();
   console.log("submitted");
   if(handleValidation(loginData)){
		setErrors([]);
   const{username,password}=loginData;
   if(username==="123"&&password==="123"){
   		props.history.push("/home/prescription");

   Authentication.handleLogin(loginData);
}
   }
   else
   console.log('Wrong credentials');
   
	}
	const handleChange=(e)=>{
		const {name,value}=e.target;
setLoginData({...loginData,[name]:value});
console.log(loginData);
	}
	return(
		<div className="login-wrapper">
		
			<img ref={tiltRef} className="logo" src={logo} alt="Logo" />
			
			<div className="login-form-wrapper">
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} name="username" value={loginData.username} placeholder="Enter mobile number or email"/>

				<input type="password" onChange={handleChange} name="password" value={loginData.password} placeholder="Enter password"/>
				<input type="submit" value="Login"/>
			</form>
			</div>
			<div className="login-form-error">
				{errors.length>0?errors.map((error,i)=> 
	 (
		<div key={i}>
			{error.message}
		</div>
		)
):null}</div>
			<div>
			<div className="login-link">Login with OTP?<Link to="loginotp">click here</Link></div>
			<div className="login-link">New Customer<Link to="register">click here</Link></div>
			</div>

		</div>
		)
}
export default Login;