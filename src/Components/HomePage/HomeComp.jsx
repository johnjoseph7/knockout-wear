import React from "react";
import Header from "../Common/Header";
import BrandSlider from "./BrandSlider";
import FirstSlider from "./FirstSlider";
import ProductCards from "./ProductCards";
import ProductSlider from "./ProductSlider";
import SmallBanner from "./SmallBanner";
import BestSelling from "./BestSelling";

function HomeComp() {
  return (
    <div className="home-comp">
      <Header></Header>
      <FirstSlider></FirstSlider>
      <ProductCards></ProductCards>
      <BrandSlider></BrandSlider>
      <ProductSlider></ProductSlider>
      <SmallBanner></SmallBanner>
      <BestSelling></BestSelling>
    </div>
  );
}

export default HomeComp;
