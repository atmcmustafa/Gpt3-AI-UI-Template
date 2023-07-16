import React from "react";

const GradientBorder = ({ title }) => {
  return (
    <div className="w-full mb-3">
      <h2 className="font-bold text-xl border-gradient w-full">{title}</h2>
    </div>
  );
};

export default GradientBorder;
