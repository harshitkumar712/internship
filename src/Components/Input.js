import Toggle from './Toggle';
const Input=()=>{
	return(
		<div>
			<form>
				<input type="text"/>
               <select  name="days" id="days">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>

			</form>
			<Toggle name="morning"/>
               <Toggle name="afternoon"/>
               <Toggle name="noon"/>
		</div>
		)
}
export default Input;