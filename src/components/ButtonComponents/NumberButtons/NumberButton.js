import React from "react";

const NumberButton = (props) => {
  return (
  <div>
    
  <button className="numButton" id={props.num} onClick={() => { 
  {
  if (props.num === '1') 
  { 
    props.setCalc(props.calc + 1)
  }
  else if (props.num === '2') 
  {
    alert('this is two')
  }
  else if (props.num === '3') 
  {
    alert('this is two')
  }
  else if (props.num === '4') 
  {
    alert('this is two')
  }
  
  }} }>{props.num} </button>
  
  </div>
    
    ) 
      // {/* Display a button element rendering the data being passed down from the parent container on props */}
};

export default NumberButton