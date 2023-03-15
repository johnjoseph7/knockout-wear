import React from "react";

function BrandSlider() {
  return (
    <div className="brand-slider">
      <div className="container">
        <div className="row justify-content-center">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel">
            <div className="carousel-inner d-flex">
             
                <div className="carousel-item active">
                <div className="row">
                  <img
                    src="./assets/brand img 2.webp"
                    className="d-block c-brand"
                    alt="..."
                  />
                  <img
                    src="./assets/brand img 2.webp"
                    className="d-block c-brand"
                    alt="..."
                  />

                  <img
                    src="./assets/brand img 2.webp"
                    className="d-block c-brand"
                    alt="..."
                  />
                  <img
                    src="./assets/brand img 2.webp"
                    className="d-block c-brand"
                    alt="..."
                  />
                  <img
                    src="./assets/brand img 2.webp"
                    className="d-block c-brand"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./assets/brand img 2.webp"
                    className="d-block c-brand"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./assets/brand img 2.webp"
                    className="d-block c-brand"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./assets/brand img 2.webp"
                    className="d-block c-brand"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./assets/brand img 2.webp"
                    className="d-block c-brand"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;
