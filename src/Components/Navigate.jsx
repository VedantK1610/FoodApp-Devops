import React from 'react'
import './Navigate.css'

function Navigate() {
  return (
    <div className="nav-container">
      <div className="nav-inner">
        <div className="nav-left">
          <div className="nav-logo">
            <img
              width="50px"
              src="https://www.theknowhowlib.com/wp-content/uploads/2020/05/Swiggy-2.png"
              alt="Swiggy"
            />
          </div>
          <div className="nav-location">
            <span className="location-name">Kochi</span>
            <span className="location-detail">10-34, Shankar-matam Veedhi...</span>
            <i className="fa-solid fa-angle-down location-arrow"></i>
          </div>
        </div>
        <div className="nav-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for restaurants and food" />
        </div>
        <div className="nav-right">
          <div className="nav-item">
            <i className="fa-solid fa-percent"></i>
            <span>Offers</span>
            <span className="nav-badge">New</span>
          </div>
          <div className="nav-item">
            <i className="fa-solid fa-bowl-food"></i>
            <span>Help</span>
          </div>
          <div className="nav-item">
            <i className="fa-regular fa-user"></i>
            <span>Profile</span>
          </div>
          <div className="nav-item">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigate
