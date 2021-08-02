class Authentication{
	handleLogin({username,password}){
		sessionStorage.setItem('user',username);
	}
	handleLogout(){
		sessionStorage.removeItem('user');
	}
	handleLoggedIn(){
		let user = sessionStorage.getItem('user');
		if(user==null){
			return false;
		}
		return true;
	}
}
export default new Authentication();