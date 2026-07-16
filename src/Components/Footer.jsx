import React from 'react'
import logo from '../Photos/Logo.png'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="footer-download">
        <div className="footer-download-inner">
          <div className="download-text">
            <h3>For better experience, download <br />the Swiggy app now</h3>
          </div>
          <div className="download-badges">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt="Google Play"
            />
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt="App Store"
            />
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-main-inner">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img width="32px" src={logo} alt="Swiggy" />
              <h3>Swiggy</h3>
            </div>
            <p className="footer-copyright">© 2023 Bundl Technologies Pvt. Ltd</p>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#team">Team</a>
            <a href="#one">Swiggy One</a>
            <a href="#instamart">Swiggy Instamart</a>
            <a href="#genie">Swiggy Genie</a>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <a href="#help">Help & Support</a>
            <a href="#partner">Partner with us</a>
            <a href="#ride">Ride with us</a>
            <h4 className="mt-4">Legal</h4>
            <a href="#terms">Terms & Conditions</a>
            <a href="#cookies">Cookie Policy</a>
            <a href="#privacy">Privacy Policy</a>
          </div>

          <div className="footer-col">
            <h4>We deliver to:</h4>
            <a href="#bangalore">Bangalore</a>
            <a href="#gurgaon">Gurgaon</a>
            <a href="#hyderabad">Hyderabad</a>
            <a href="#delhi">Delhi</a>
            <a href="#mumbai">Mumbai</a>
            <a href="#pune">Pune</a>
            <button className="cities-btn">589 Cities <i className="fa-solid fa-angle-down"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
