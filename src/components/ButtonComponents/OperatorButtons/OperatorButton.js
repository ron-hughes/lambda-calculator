import React from "react";

const OperatorButton = (props) => {

  return (
    <div><button className="opButton">{props.ops.char}</button></div>
      
  );
};

export default OperatorButton


/* Display a button element rendering the data being passed down from the parent container on props */