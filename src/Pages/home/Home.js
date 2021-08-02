import './home.css';
import Category from '../../Parts/category/Category';
import Information from '../../Parts/information/Information';
const Home=()=>{
	return(
		<div className="home-wrapper">
		<Information/>
			<Category/>

		</div>
		)
}
export default Home;