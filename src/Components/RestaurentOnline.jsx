import React, { useState } from 'react'
import './RestaurentOnline.css'

const filters = ['Filter', 'Sort By', 'Fast Delivery', 'New On Swiggy', 'Rating 4.0+', 'Pure Veg', 'Offers', '₹300–₹600', 'Under ₹300']

const allRestaurants = [
  { name: 'The Good Bowl', rating: 4.0, cuisine: 'Biriyani, North Indian, Pastas, Punjabi', location: 'Chittethukara', offer: '40% OFF UPTO ₹80', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0b3356a88b6fc5966c452c4c9b1b5e4a' },
  { name: 'Sweet Truth - Cake and...', rating: 3.9, cuisine: 'Snacks, Bakery, Dessert, Beverages', location: 'Chittethukara', offer: '60% OFF UPTO ₹120', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4a3b48488e3aa9bda13efd8cfcd95284' },
  { name: 'Frozen Bottle - Milkshakes,...', rating: 4.1, cuisine: 'Desserts, Beverages, IceCream,...', location: 'Ernakulam', offer: '25% OFF UPTO ₹125', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fx2mgrbp4ifryi76pgef' },
  { name: 'Faasos - Wrap & Rolls', rating: 3.7, cuisine: 'Kebabs, Fast Food, Snacks, North...', location: 'Chittethukara', offer: '50% OFF UPTO ₹100', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348' },
  { name: 'Subway', rating: 3.9, cuisine: 'Healthy Food, Salad, Snacks,...', location: 'Kakkanad', offer: '50% OFF UPTO ₹100', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b' },
  { name: 'The Burger Junction', rating: 4.5, cuisine: 'American, Beverages', location: 'Kakkanad', offer: '', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hqskgt9wjjgqkj74coyw' },
  { name: 'KFC', rating: 4.1, cuisine: 'American, Burgers, Biriyani, Snacks,...', location: 'Kakkanad', offer: '20% OFF UPTO ₹50', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426' },
  { name: "Amma's Pastries", rating: 3.9, cuisine: 'Desserts, Bakery', location: 'Kakkanad', offer: '10% OFF UPTO ₹40', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ly5rzyg6tzwu4idmy4i1' },
  { name: 'Thaal Kitchen', rating: 3.9, cuisine: 'Kerala, Arabian', location: 'Kakkanad', offer: '20% OFF UPTO ₹50', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xxi1rb25fxm3le88weuo' },
  { name: 'Burger Spot', rating: 4.5, cuisine: 'Burgers, Fast Food', location: 'Kakkanad', offer: '30% OFF UPTO ₹75', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jbdpvb8bmzjirqmg44w3' },
  { name: "Mc Donald's", rating: 4.3, cuisine: 'Burger, Beverages, Cafe, Desserts', location: 'Kakkanad', offer: '', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4' },
  { name: 'Palaaram', rating: 4.2, cuisine: 'Kerala, Biriyani, North Indian, Arabian,...', location: 'Kakkanad', offer: '30% OFF UPTO ₹75', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zchpuqit7k4pdndgse4t' },
  { name: 'Alakapuri', rating: 4.4, cuisine: 'South Indian, Kerala, North Indian', location: 'Kakkanad', offer: '10% OFF UPTO ₹40', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k2why61tsxk9sh0sl68d' },
  { name: 'Galaxy Family Restaurant', rating: 4.4, cuisine: 'Kerala, South Indian, Chinese, North...', location: 'Kakkanad', offer: 'FREE ITEM', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jys7zsopl1sjy2wwxadd' },
  { name: 'Aryaas', rating: 4.4, cuisine: 'South Indian, North Indian, Chinese', location: 'Kakkanad', offer: '', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xejp6fugbtzu08vpfqmu' },
  { name: 'Al Sheba Kuzhimandhi', rating: 4.1, cuisine: 'Arabian, Beverages', location: 'Kakkanad', offer: '10% OFF UPTO ₹40', img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56b7222d3239a954d09b42c05347debf' },
]

function RestaurentOnline() {
  const [activeFilter, setActiveFilter] = useState(null)

  return (
    <div className="online-section">
      <section className="section">
        <div className="section-header">
          <h2>Restaurants with online food delivery in Kochi</h2>
        </div>
        <div className="filter-bar">
          {filters.map((f, i) => (
            <button
              key={i}
              className={`filter-chip ${activeFilter === i ? 'active' : ''}`}
              onClick={() => setActiveFilter(activeFilter === i ? null : i)}
            >
              {f}
              {['Filter', 'Sort By'].includes(f) && <i className="fa-solid fa-angle-down"></i>}
            </button>
          ))}
        </div>
        <div className="resto-grid">
          {allRestaurants.map((r, i) => (
            <div className="resto-card-wide" key={i}>
              <div className="resto-img-wide">
                <img src={r.img} alt={r.name} />
                {r.offer && <div className="resto-offer-wide">{r.offer}</div>}
              </div>
              <div className="resto-info-wide">
                <h3>{r.name}</h3>
                <div className="resto-rating-wide">
                  <span className="rating-star"><i className="fa-solid fa-star"></i> {r.rating}</span>
                  <span className="rating-dot">•</span>
                  <span className="rating-time">35-40 mins</span>
                </div>
                <p className="resto-cuisine-wide">{r.cuisine}</p>
                <p className="resto-location-wide">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="section-divider" />
      </section>
    </div>
  )
}

export default RestaurentOnline
