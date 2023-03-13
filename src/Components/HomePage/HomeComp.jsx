import React from "react";
import Header from "../Common/Header";
import BrandSlider from "./BrandSlider";
import FirstSlider from "./FirstSlider";
import ProductCards from "./ProductCards";

function HomeComp() {
  return (
    <div className="home-comp">
      <Header></Header>
      <FirstSlider></FirstSlider>
      <ProductCards></ProductCards>
      <BrandSlider></BrandSlider>
    </div>
  );
}

export default HomeComp;
