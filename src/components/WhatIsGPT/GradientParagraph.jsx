import React from "react";
import Heading from "../GeneralComponents/Heading";
import Paragraph from "../GeneralComponents/Paragraph";
import GradientBorder from "./GradientBorder";

const GradientParagraph = ({ title, par, textSize }) => {
  return (
    <div className="relative">
      <GradientBorder title={title} />
      <Paragraph paragraphText={par} textSize={textSize} />
    </div>
  );
};

export default GradientParagraph;
