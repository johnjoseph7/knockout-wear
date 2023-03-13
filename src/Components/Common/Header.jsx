import React from 'react'

function Header() {
  return (
    <div>
         <div className="header">
        <div className="header_1">
          <span>FREE SHIPPING ON ORDERS OVER $50</span>
          <a href="#">See details</a>
        </div>
        <div className="header_2">
          <div className="header_icon">
            <img src="./assets/header logo.webp" />
          </div>
          <div className="header_nav">
            <a href="#">HOME</a>
            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">KIDS</a>
            <a href="#">CAPS</a>
            <a href="#">JEANS</a>
            <a href="#">JACKETS</a>
            <a href="#">SALE</a>
          </div>
          <div className="nav_icons">
            <a href="#"><i className="fa-solid fa-magnifying-glass"> </i></a>
            <a href="#"><i className="fa-solid fa-cart-shopping"> </i></a>
            <a href="#"><i className="fa-solid fa-bars"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;