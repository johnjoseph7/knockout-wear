import React from "react";

function ProductCards() {
  return (
    <div className="product-card">
      <div className="product-cards mt-3">
        <div className="container">
          <div className="row">
            <div className="col-4 ">
              <a href="#">
                <div className="card card1">
                  <img src="./assets/card 1 img.gif" alt="" />
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <div className="card card2">
                  <img src="./assets/caed img 2.webp" alt="" />
                </div>
              </a>
            </div>
            <div className="col-4 ">
              <a href="#">
                <div className="card card3">
                  <img src="./assets/card img 3.webp" alt="" />
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <div className="card car4">
                  <img src="./assets/card img 4.webp" alt="" />
                </div>
              </a>
            </div>
            <div className="col-4 ">
              <a href="#">
                <div className="card card5">
                  <img src="./assets/caed img 5.webp" alt="" />
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <div className="card card6">
                  <img src="./assets/card img 6.webp" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
