import React, { useState } from "react";
const Toggle = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      
      <button style={checked?{backgroundColor:"#003300"}:null} onClick={() => setChecked(!checked)}>{props.name.toUpperCase()}</button>
    </>
  );
};

export default Toggle;
