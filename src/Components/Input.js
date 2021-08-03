import Toggle from './Toggle';
const Input=()=>{
	return(
		<div className="input-wrapper">
			<form onSubmit={(e)=>e.preventDefault()}>
				<input type="text" list="medicine" placeholder="Select/Type:"/>
<datalist id="medicine">
  <option></option>
  <option>Medicine1</option>
  <option>Medicine2</option>
  <option>Medicine3</option>
</datalist>
              <Toggle name="M"/>
               <Toggle name="AN"/>
               <Toggle name="N"/>
<select onChange={()=>console.log('onchange')} id="days" value="days">
 <option value="days" disabled >Days</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>

			</form>
			
		</div>
		)
}
export default Input;