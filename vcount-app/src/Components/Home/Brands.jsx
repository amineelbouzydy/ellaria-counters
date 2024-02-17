import React from "react";
import Slider from "../Home/Slider";
import brands from "../../Assets/brands.jpg"
const Brands = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Ils nous font confiance</h1>
      </div>
      <div className="brands-slider">
        <Slider/>
      </div>
      <div className="brands-img">
      <img src={brands}></img>
      </div>
    </div>
  );
};

export default Brands;