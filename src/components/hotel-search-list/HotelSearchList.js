/** @format */

import "./HotelSearchList.css";

const SearchBar = () => {
  return (
    <div className="hotel-search-list">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="hotel-search-list-img"
      />
      <div className="hotel-search-list-desc">
        <h1 className="hotel-search-list-title">Tower Street Apartments</h1>
        <span className="hotel-search-list-distance">500m from center</span>
        <span className="hotel-search-list-taxiOp">Free airport taxi</span>
        <span className="hotel-search-list-subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="hotel-search-list-features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="hotel-search-list-cancelOp">Free cancellation </span>
        <span className="hotel-search-list-cancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="hotel-search-list-details">
        <div className="hotel-search-list-rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="hotel-search-list-details">
          <span className="hotel-search-list-price">$112</span>
          <span className="hotel-search-list-tax">Includes taxes and fees</span>
          <button className="hotel-search-list-check-button">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
