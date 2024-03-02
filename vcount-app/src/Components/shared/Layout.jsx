import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { FiArrowRight } from "react-icons/fi";
export default function Layout() {
  return (
    <div>
      <Navbar />

      <div className="outlet">{<Outlet />}</div>
      <button className="fixed-button">
        <Link to="/contact" className="demo-link">
          Obtenir une démo
        </Link>
        <FiArrowRight />{" "}
      </button>
      <Footer />
    </div>
  );
}
