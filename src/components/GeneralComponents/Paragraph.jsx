import React from "react";

const Paragraph = ({ paragraphText, textSize }) => {
  return <p className={`text-colorText  ${textSize}`}>{paragraphText}</p>;
};

export default Paragraph;
