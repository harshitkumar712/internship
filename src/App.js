
import './App.css';
import Login from './Pages/login/Login';
import LoginOtp from './Pages/login/LoginOtp';
import Prescription from './Pages/prescription/Prescription';
// import Diagnostics from './Pages/diagnostics/Diagnostics';
import Register from './Pages/register/Register';
import User from './Pages/user/User';
import Home from './Pages/home/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
    <Router >
    <Route exact path="/" component={Login}/>
    <Route path="/login" component={Login}/>
    <Route path="/loginotp" component={LoginOtp}/>
    <Route path="/register" component={Register}/>
    <Route exact path="/home" component={Home}/>
    <Route path="/home/prescription" component={Prescription}/>
    {/* <Route path="/home/diagnostics" component={Diagnostics}/> */}
    <Route path="/home/user" component={User}/>
    </Router>
    </div>
  );
}

export default App;
