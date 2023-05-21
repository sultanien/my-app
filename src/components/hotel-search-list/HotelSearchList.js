/** @format */

import { Link } from "react-router-dom";
import "./HotelSearchList.css";

const SearchBar = ({item}) => {
  return (
    <div className="hotel-search-list">
      <img src={item.photos[0]} alt="" className="hotel-search-list-img" />
      <div className="hotel-search-list-desc">
        <h1 className="hotel-search-list-title">{item.name}</h1>
        <span className="hotel-search-list-distance">{item.distance}</span>
        <span className="hotel-search-list-taxiOp">Free airport taxi</span>
        <span className="hotel-search-list-subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="hotel-search-list-features">{item.desc}</span>
        <span className="hotel-search-list-cancelOp">Free cancellation </span>
        <span className="hotel-search-list-cancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="hotel-search-list-details">
        {item.rating && (
          <div className="hotel-search-list-rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="hotel-search-list-details">
          <span className="hotel-search-list-price">${item.cheapestPrice}</span>
          <span className="hotel-search-list-tax">Includes taxes and fees</span>
          <Link to={`${item._id}`}>
            <button className="hotel-search-list-check-button">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
