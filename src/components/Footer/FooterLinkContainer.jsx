import React from "react";
import FooterLink from "./FooterLink";

const FooterLinkContainer = ({ linkTitle, linkName }) => {
  return (
    <div className="bg-red-500">
      <h2 className="text-white font-bold mb-4">{linkTitle}</h2>
      <ul className="flex flex-col">
        <FooterLink link={linkName} />
      </ul>
    </div>
  );
};

export default FooterLinkContainer;
