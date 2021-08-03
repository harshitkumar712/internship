import React, { useState } from "react";
const Toggle = (props) => {
  const [checked, setChecked] = useState(false);

const uncheckedStyle = {
      color: "#003300",
background:"#fff",
  
      
    };
    const checkedStyle={
      color: "#fff",
background:"#003300",
      
      
    };
  return (
    <>
      
      <button className="toggle-button" style={checked?checkedStyle:uncheckedStyle} onClick={() => setChecked(!checked)}>{props.name.toUpperCase()}</button>
    </>
  );
};

export default Toggle;
