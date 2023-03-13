import React from "react";

function BrandSlider() {
  return (
 
      <div className="brand-slider">
        <div className="container">
          <div className="row">
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="./assets/brand img 2.webp"
                  class="d-block c-brand"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./assets/brand img 2.webp"
                  class="d-block c-brand"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./assets/brand img 2.webp"
                  class="d-block c-brand"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./assets/brand img 2.webp"
                  class="d-block c-brand"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./assets/brand img 2.webp"
                  class="d-block c-brand"
                  alt="..."
                />
              </div>
            </div>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>
         
        </div>
      </div>
 
  );
}

export default BrandSlider;
