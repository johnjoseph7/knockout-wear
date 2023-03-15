import React from "react";

function SmallBanner() {
  return (
    <div className="small-banner">
      <div className="container mt-5">
        <h3
          style={{
            fontSize: "24px",
            fontFamily: "Open sans",
            margin: "0 0 42px",
          }}>
          ONLY THE BEST
        </h3>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "Rubik, Arial, Helvetica, sans-serif",
            margin: " -31px 0 42px",
          }}>
          Popular Catagories in Knockout Wear
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="row banner-style">
              <div className="col-md-6">
                <img
                  src="./assets/men banner1.jpg"
                  alt=""
                  style={{ width: "264px", height: "302px" }}
                />
              </div>
              <div className="col-md-6 ">
                <div className="card-body text-start">
                  <h5
                    className="card-title bold text-decoration-underline mb-4 "
                    style={{ fontSize: "24px" }}>
                    MEN
                  </h5>

                  <p>
                    <a href="#"></a>APPERAL
                  </p>
                  <p>
                    <a href="#"></a>ACCESSRIOUS
                  </p>
                  <p>
                    <a href="#"></a>HATS
                  </p>
                  <p>
                    <a href="#"></a>JEANS
                  </p>
                  <p>
                    <a href="#"></a>FOOTWEAR
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row banner-style">
              <div className="col-md-6">
                <img
                  src="./assets/women banner1.jpg"
                  alt=""
                  style={{ width: "264px", height: "302px" }}
                />
              </div>
              <div className="col-md-6 ">
                <div className="card-body text-start">
                  <h5
                    className="card-title bold text-decoration-underline mb-4 "
                    style={{ fontSize: "24px" }}>
                    WOMEN
                  </h5>

                  <p>
                    <a href="#"></a>APPERAL
                  </p>
                  <p>
                    <a href="#"></a>ACCESSRIOUS
                  </p>
                  <p>
                    <a href="#"></a>HATS
                  </p>
                  <p>
                    <a href="#"></a>JEANS
                  </p>
                  <p>
                    <a href="#"></a>FOOTWEAR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBanner;
