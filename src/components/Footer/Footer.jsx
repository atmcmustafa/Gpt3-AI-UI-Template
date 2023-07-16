import React from "react";
import logo from "../../assets/logo.svg";
import FooterLink from "./FooterLink";
const Footer = () => {
  return (
    <div className="w-full bg-colorFooter text-colorText py-12">
      <div className="container text-center md:text-start grid grid-cols-1 items-center justify-center w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="mx-auto md:mx-0 ">
          <img className="mx-auto md:mx-0" src={logo} />
          <p className="mt-4 text-sm">
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div>
          <h2 className="text-white font-bold mb-4">Links</h2>
          <ul className="flex flex-col">
            <FooterLink link={"Overans"} />
            <FooterLink link={"Social Media"} />
            <FooterLink link={"Counters"} />
            <FooterLink link={"Contact"} />
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold mb-4">Company</h2>
          <ul className="flex flex-col">
            <FooterLink link={"Terms & Conditions"} />
            <FooterLink link={"Privacy Policy"} />
            <FooterLink link={"Contact"} />
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold mb-4">Links</h2>
          <ul className="flex flex-col">
            <FooterLink link={" Crechterwoord K12 182 DK Alknjkcb"} />
            <FooterLink link={"05572388"} />
            <FooterLink link={"info@example.com"} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
