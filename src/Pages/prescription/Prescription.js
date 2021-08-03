// import Information from '../../Parts/information/Information';
import Category from '../../Parts/category/Category';
import './prescription.css';
import Input from '../../Components/Input';
const Prescription =()=>{
	return(
		<div className="prescription-wrapper">
			{/* <Information/> */}
			<Category id={6}/>
			<Input/>
			<Input/>
			<Input/>
			<Input/>
			<Input/>
			<Input/>
			<Input/>
		</div>
		)
}
export default Prescription;