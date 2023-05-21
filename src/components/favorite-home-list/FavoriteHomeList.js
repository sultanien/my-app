/** @format */

import useFetch from "../../hooks/useFetch";
import "./FavoriteHomeList.css";

const FavoriteHomeList = () => {
  const { data, loading } = useFetch("/hotels?featured=true");

  return (
    <div className="favorite-home-list">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="favorite-home-list-item" key={item._id}>
              <img src={item.photos[0]} alt="" className="favorite-home-list-item-img" />
              <span className="favorite-home-list-item-name">{item.name}</span>
              <span className="favorite-home-list-item-city">{item.city}</span>
              <span className="favorite-home-list-item-price">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="favorite-home-list-item-rating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FavoriteHomeList;
