import React from "react";

const NavbarButton = ({ buttonName, bgColor }) => {
  return (
    <button className={`min-w-[150px] py-3 ${bgColor} rounded-md`}>
      {buttonName}
    </button>
  );
};

export default NavbarButton;
