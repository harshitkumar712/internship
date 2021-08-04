import './user.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
 import Category from '../../Parts/category/Category';
const User=()=>{
const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [data, setData] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
  
      try {
        const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
  
        setData(response.data.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData()
  }, []);
 
  const userRow=data&&data.map((employee)=>{
  return(
  	<React.Fragment key={employee.id}>
					<tr>
						<td>{employee.id }</td>
						<td>{employee.employee_name}</td>
						<td>{employee.employee_salary}</td>
						<td>{employee.employee_age}</td>
						
						
					</tr>
				</React.Fragment>
  	)
  })

	return(
		<div className="user-wrapper">
			<Category id={1}/>
			{isError && <div>Something went wrong ...</div>}
			 {isLoading ? (
        <div>Loading ...</div>
      ) :
      <table>
				<thead>
					<tr>
						<th>ID</th>

						<th>NAME</th>
						<th>SALARY</th>
						<th>AGE</th>
					</tr>
				</thead>
				<tbody>{userRow}</tbody>
			</table>
      
        
      }
    </div>
	
		)
}
export default User;