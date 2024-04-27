import React from "react";
import { navItems } from "./navItems";
import NavItems from "../NavItems";
import Logo from "../../Assets/logo.png";

const Navbar = () => {
  return <div>
    <nav>
    <a href="/"  className="nav-logo-container">
        <img src={Logo} alt="" className="logo" />
      </a>
        <ul className = "menus" > {
            navItems.map((menu, index) => {
                const depthLevel = 0;
                return <NavItems items = {
                    menu
                }
                key = {
                    index
                }
                depthLevel = {
                    depthLevel
                }
                />;
            })
        } </ul> </nav>
  </div>;
};

export default Navbar;
