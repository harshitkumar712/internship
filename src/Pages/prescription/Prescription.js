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
			<div className="input-extra">
			<i className="fas fa-camera"></i>
			<input type="file" />
			<textarea className="input-textarea" placeholder="Enter other medicine"/>
			</div>
			</div>
		</div>
		)
}
export default Prescription;