import React from "react";
import NavbarButton from "../Navbar/NavbarButton";

const FutureAcess = () => {
  return (
    <div className="bg-colorFooter w-full py-12">
      <div className="container text-white text-center flex items-center justify-center flex-col">
        <h2 className="gradient-text text-4xl  font-bold">
          Do you want to step in to the <br /> future before others
        </h2>
        <NavbarButton
          bgColor={
            "bg-transparent border rounded-none px-4 mt-8 hover:bg-colorBg duration-200"
          }
          buttonName={"Request Early Access"}
        />
      </div>
    </div>
  );
};

export default FutureAcess;
