import React from 'react'
import './OfferBanner.css'
import banner2 from '../Photos/Banner2.png'
import banner1 from '../Photos/Banner1.png'
import banner3 from '../Photos/Banner3.png'
import banner4 from '../Photos/Banner4.png'

const offerBanners = [banner2, banner1, banner3, banner4]

const categories = [
  { name: 'Biryani', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png' },
  { name: 'Burger', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png' },
  { name: 'Pizza', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png' },
  { name: 'South Indian', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png' },
  { name: 'Chinese', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png' },
  { name: 'North Indian', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png' },
  { name: 'Shawarma', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png' },
  { name: 'Rolls', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png' },
  { name: 'Desserts', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667630/PC_Creative%20refresh/Desserts_2.png' },
  { name: 'Shakes', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png' },
  { name: 'Pure Veg', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png' },
  { name: 'Dosa', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png' },
  { name: 'Cakes', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png' },
  { name: 'Paratha', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png' },
  { name: 'Pasta', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png' },
  { name: 'Kebabs', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png' },
  { name: 'Idli', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png' },
  { name: 'Ice Creams', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png' },
  { name: 'Tea', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/rng/md/carousel/production/cbb85a3c1684891105294d11f8359996' },
  { name: 'Pothichoru', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/rng/md/carousel/production/e20c602ba8ed5d8ec2204e7a7b19d9f6' },
]

function OffersBanner() {
  return (
    <div className="banner-wrapper">
      <section className="section">
        <div className="section-header">
          <h2>Best offers for you</h2>
          <div className="section-nav">
            <button className="scroll-btn" onClick={() => document.getElementById('offer-scroll').scrollBy({ left: -500, behavior: 'smooth' })}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="scroll-btn" onClick={() => document.getElementById('offer-scroll').scrollBy({ left: 500, behavior: 'smooth' })}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="offer-scroll" id="offer-scroll">
          {offerBanners.map((banner, i) => (
            <div className="offer-card" key={i}>
              <img src={banner} alt={`Offer ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>What's on your mind?</h2>
          <div className="section-nav">
            <button className="scroll-btn" onClick={() => document.getElementById('cat-scroll').scrollBy({ left: -500, behavior: 'smooth' })}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="scroll-btn" onClick={() => document.getElementById('cat-scroll').scrollBy({ left: 500, behavior: 'smooth' })}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="category-scroll" id="cat-scroll">
          {categories.map((cat, i) => (
            <div className="category-item" key={i}>
              <img src={cat.img} alt={cat.name} />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
        <hr className="section-divider" />
      </section>
    </div>
  )
}

export default OffersBanner
