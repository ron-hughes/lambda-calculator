import React from "react";

const NumberButton = (props) => {
  return (
  <div><button className="numButton" id={props.num}>{props.num}</button></div>
    ) 
      // {/* Display a button element rendering the data being passed down from the parent container on props */}
};

export default NumberButton