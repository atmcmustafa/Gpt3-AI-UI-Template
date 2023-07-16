import React from "react";

const NavbarLink = ({ href, title }) => {
  return (
    <li>
      <a href={href}>{title}</a>
    </li>
  );
};

export default NavbarLink;
