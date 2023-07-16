import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./Images";

const Bradns = () => {
  return (
    <div className="bg-colorBg w-full ">
      <div className="flex gap-14 justify-center  items-center flex-wrap py-[38.5px]">
        <img src={google} />
        <img src={slack} />
        <img src={atlassian} />
        <img src={dropbox} />
        <img src={shopify} />
      </div>
    </div>
  );
};

export default Bradns;
