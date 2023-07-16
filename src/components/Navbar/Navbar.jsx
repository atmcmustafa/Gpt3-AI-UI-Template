import React from "react";
import logo from "../../assets/logo.svg";
import NavbarLink from "./NavbarLink";
import NavbarButton from "./NavbarButton";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <div className="bg-colorBg text-white ">
      <header className="container py-8 hidden md:flex items-center justify-between ">
        <nav className="flex items-center gap-6 ">
          <a href="#">
            <img src={logo} />
          </a>
          <ul className="flex  gap-8">
            <NavbarLink href={"#home"} title={"Home"} />
            <NavbarLink href={"#whatIsGPT"} title={"What is GPT"} />
            <NavbarLink href={"#openAI"} title={"Open AI"} />
            <NavbarLink href={"#caseStudies"} title={"Case Studies"} />
            <NavbarLink href={"#library"} title={"Library"} />
          </ul>
        </nav>
        <div className="btn-group flex gap-2">
          <NavbarButton buttonName={"Sign In"} />
          <NavbarButton bgColor={"bg-orange-600"} buttonName={"Sign Up"} />
        </div>
      </header>
      <MobileNav />
    </div>
  );
};

export default Navbar;
