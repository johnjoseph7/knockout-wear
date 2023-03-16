import React from "react";

function InstaCards() {
  return (
    <div className="container-fluid ">
      <h3
        style={{
          fontSize: "24px",
          fontFamily: "Open sans",
          margin: "42px 0 42px",
          fontWeight: "bold",
        }}
      >
        INSTAGRAM
      </h3>
      <p
        style={{
          fontSize: "14px",
          fontFamily: "Rubik, Arial, Helvetica, sans-serif",
          margin: " -31px 0 42px",
        }}
      >
        Follow as on Instagram
      </p>
      <div className="row">
        <div style={{ width: "380px", height: "360px", margin: "0 0 20px" }}>
          <img
            src="./assets/insta img 1.jpg"
            alt=""
            style={{ width: "360px", height: "360px" }}
          />
        </div>
        <div style={{ width: "380px", height: "360px" }}>
          <img
            src="./assets/insta img 2.jpg"
            alt=""
            style={{ width: "360px", height: "360px" }}
          />
        </div>
        <div style={{ width: "380px", height: "360px" }}>
          <img
            src="./assets/insta img 3.jpg"
            alt=""
            style={{ width: "360px", height: "360px" }}
          />
        </div>
        <div style={{ width: "380px", height: "360px" }}>
          <img
            src="./assets/insta img 4.jpg"
            alt=""
            style={{ width: "360px", height: "360px" }}
          />
        </div>
        <div style={{ width: "380px", height: "360px" }}>
          <img
            src="./assets/insta img 5.jpg"
            alt=""
            style={{ width: "360px", height: "360px" }}
          />
        </div>
        <div style={{ width: "380px", height: "360px" }}>
          <img
            src="./assets/insta img 6.jpg"
            alt=""
            style={{ width: "360px", height: "360px" }}
          />
        </div>
        <div style={{ width: "380px", height: "360px" }}>
          <img
            src="./assets/insta img 7.jpg"
            alt=""
            style={{ width: "360px", height: "360px" }}
          />
        </div>
        <div style={{ width: "380px", height: "360px" }}>
          <img
            src="./assets/insta img8.jpg"
            alt=""
            style={{ width: "360px", height: "360px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default InstaCards;
