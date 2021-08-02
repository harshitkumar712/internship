import Information from '../../Parts/information/Information';
import Category from '../../Parts/category/Category';
import Input from '../../Components/Input';
const Prescription =()=>{
	return(
		<div>
			<Information/>
			<Category id={6}/>
			<Input/>
			<Input/>
		</div>
		)
}
export default Prescription;