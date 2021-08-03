// import Information from '../../Parts/information/Information';
import Category from '../../Parts/category/Category';
import './prescription.css';
import Input from '../../Components/Input';
const Prescription =()=>{
	return(
		<div className="prescription-wrapper">
			{/* <Information/> */}
			<Category id={6}/>
			<div className="input-container">
			<Input/>
			<Input/>
			<Input/>
			<Input/>
			<Input/>
			<Input/>
			<Input/>
			</div>
		</div>
		)
}
export default Prescription;