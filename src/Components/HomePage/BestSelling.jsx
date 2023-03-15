import React from "react";

function BestSelling() {
  return (
    <>
      <div className="best-selling">
        <div className="container">
          <h3
            style={{
              fontSize: "24px",
              fontFamily: "Open sans",
              margin: "0 0 42px",
            }}>
            BEST SELLING
          </h3>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Rubik, Arial, Helvetica, sans-serif",
              margin: " -31px 0 42px",
            }}>
            Bestselling in this Week on Knockout Wear
          </p>

          <div
            id="carouselExampleRide"
            className="carousel slide"
            data-bs-ride="true">
            <div className="carousel-inner d-flex align-items-center">
              <div className="carousel-item active d-flex">
                <div className="row align-items-center">
                  <div
                    className="selling-card"
                    style={{ width: "239px", height: "410px" }}>
                    <div className="selling-body">
                      <img
                        src="./assets/product img1.jpg"
                        style={{ width: "218px", height: "218px" }}
                      />
                      <div>
                        <h4>Men</h4>
                        <p
                          style={{
                            fontSize: "14px",
                            fontFamily: "Rubik, Arial, Helvetica, sans-serif",
                          }}>
                          Hello everyone
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="selling-card"
                    style={{ width: "239px", height: "410px" }}>
                    <div className="selling-body">
                      <img
                        src="./assets/product img1.jpg"
                        style={{ width: "218px", height: "218px" }}
                      />
                      <div>
                        <h4>Men</h4>
                        <p
                          style={{
                            fontSize: "14px",
                            fontFamily: "Rubik, Arial, Helvetica, sans-serif",
                          }}>
                          Hello everyone
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="selling-card"
                    style={{ width: "239px", height: "410px" }}>
                    <div className="selling-body">
                      <img
                        src="./assets/product img1.jpg"
                        style={{ width: "218px", height: "218px" }}
                      />
                      <div>
                        <h4>Men</h4>
                        <p
                          style={{
                            fontSize: "14px",
                            fontFamily: "Rubik, Arial, Helvetica, sans-serif",
                          }}>
                          Hello everyone
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="selling-card"
                    style={{ width: "239px", height: "410px" }}>
                    <div className="selling-body">
                      <img
                        src="./assets/product img1.jpg"
                        style={{ width: "218px", height: "218px" }}
                      />
                      <div>
                        <h4>Men</h4>
                        <p
                          style={{
                            fontSize: "14px",
                            fontFamily: "Rubik, Arial, Helvetica, sans-serif",
                          }}>
                          Hello everyone
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="./assets/hey-dude-shoews-slider-05.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSelling;
