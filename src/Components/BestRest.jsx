import React from 'react'
import './BestRes.css'

function BestRest() {
  return (
    <div className="bestrest-wrapper">
      <section className="section">
        <h2 className="bestrest-title">Best Places to Eat Across Cities</h2>
        <div className="bestrest-grid">
          <button>Best Restaurants in Bangalore</button>
          <button>Best Restaurants in Pune</button>
          <button>Best Restaurants in Mumbai</button>
          <button>Best Restaurants in Delhi</button>
          <button>Best Restaurants in Hyderabad</button>
          <button>Best Restaurants in Kolkata</button>
          <button>Best Restaurants in Chennai</button>
          <button>Best Restaurants in Chandigarh</button>
          <button>Best Restaurants in Ahmedabad</button>
          <button>Best Restaurants in Jaipur</button>
          <button>Best Restaurants in Nagpur</button>
          <button className="show-more">Show More <i className="fa-solid fa-angle-down"></i></button>
        </div>
      </section>

      <section className="section">
        <h2 className="bestrest-title">Best Cuisines Near Me</h2>
        <div className="bestrest-grid">
          <button>Chinese Restaurant Near Me</button>
          <button>South Indian Restaurant Near Me</button>
          <button>Indian Restaurant Near Me</button>
          <button>Kerala Restaurant Near Me</button>
          <button>Korean Restaurant Near Me</button>
          <button>North Indian Restaurant Near Me</button>
          <button>Seafood Restaurant Near Me</button>
          <button>Bengali Restaurant Near Me</button>
          <button>Punjabi Restaurant Near Me</button>
          <button>Italian Restaurant Near Me</button>
          <button>Andhra Restaurant Near Me</button>
          <button className="show-more">Show More <i className="fa-solid fa-angle-down"></i></button>
        </div>
      </section>

      <section className="section">
        <h2 className="bestrest-title">Explore Every Restaurants Near Me</h2>
        <div className="bestrest-grid two-col">
          <button>Explore Restaurants Near Me</button>
          <button>Explore Top Rated Restaurants Near Me</button>
        </div>
      </section>
    </div>
  )
}

export default BestRest
