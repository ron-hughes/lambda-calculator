import React from "react";

const NumberButton = (props) => {
  return (
  <div className={`n${props.id}`}>
    
  <button className={`numButton n${props.id}`} id={props.num} onClick={() => { 
  {
  if (props.num === '1') 
  { 
    props.setCalc(props.calc + 1)
  }
  else if (props.num === '2') 
  {
    props.setCalc(props.calc + 2)
  }
  else if (props.num === '3') 
  {
    props.setCalc(props.calc + 3)
  }
  else if (props.num === '4') 
  {
    props.setCalc(props.calc + 4)
  }
  else if (props.num === '5') 
  {
    props.setCalc(props.calc + 5)
  }
  else if (props.num === '6') 
  {
    props.setCalc(props.calc + 6)
  }
  else if (props.num === '7') 
  {
    props.setCalc(props.calc + 7)
  }
  else if (props.num === '8') 
  {
    props.setCalc(props.calc + 8)
  }
  else if (props.num === '9') 
  {
    props.setCalc(props.calc + 9)
  }
  else if (props.num === '0') 
  {
    props.setCalc(props.calc + 0)
  }
  else if (props.num === '.') 
  {
    props.setCalc(props.calc + '.')
  }
  }} }>{props.num} </button>
  
  </div>
    
    ) 
      // {/* Display a button element rendering the data being passed down from the parent container on props */}
};

export default NumberButton