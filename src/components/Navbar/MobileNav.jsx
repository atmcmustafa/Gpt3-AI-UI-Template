import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import NavbarLink from "./NavbarLink";
import NavbarButton from "./NavbarButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="block md:hidden">
      <header className="container py-8 flex items-center justify-between relative">
        <a href="#">
          <img width={72} height={72} src={logo} />
        </a>
        <div onClick={handleClick} className="text-4xl ">
          {toggle ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        {toggle ? (
          <nav
            className={`flex flex-col items-center gap-6 absolute bg-colorBlog p-4 rounded-md duration-500 ${
              toggle
                ? "top-20 visible right-3 z-20 duration-500"
                : "invisible -top-[50px] duration-500"
            } `}
          >
            <ul className="flex flex-col gap-8">
              <NavbarLink href={"#home"} title={"Home"} />
              <NavbarLink href={"#whatIsGPT"} title={"What is GPT"} />
              <NavbarLink href={"#openAI"} title={"Open AI"} />
              <NavbarLink href={"#caseStudies"} title={"Case Studies"} />
              <NavbarLink href={"#library"} title={"Library"} />
            </ul>
            <div className="btn-group flex flex-col gap-2 ">
              <NavbarButton buttonName={"Sign In"} />
              <NavbarButton bgColor={"bg-orange-600"} buttonName={"Sign Up"} />
            </div>
          </nav>
        ) : (
          ""
        )}
      </header>
    </div>
  );
};

export default MobileNav;
