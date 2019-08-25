import React from "react";

const SpecialButton = (props) => {
  return (
    <>
    <div className={`s${props.id}`}><button className={`specButton s${props.id}`}>{props.spec}</button></div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton