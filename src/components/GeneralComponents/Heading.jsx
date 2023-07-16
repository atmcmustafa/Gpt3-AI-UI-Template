import React from "react";

const Headig = ({ heading, textSize }) => {
  return <h1 className={`${textSize} w-full font-bold `}>{heading}</h1>;
};

export default Headig;
