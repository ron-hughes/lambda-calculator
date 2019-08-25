import React from "react";

const SpecialButton = (props) => {
  return (
    <>
    <div className={`s${props.id}`}><button className={`specButton s${props.id}`} onClick={() => { 
  {
    if (props.spec === "C") {
      props.setCalc("")
    }

  }} }>{props.spec}</button></div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton