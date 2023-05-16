import "./FavoriteHomeList.css";

const FavoriteHomeList = () => {
  return (
    <div className="favorite-home-list">
      <div className="favorite-home-list-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="favorite-home-list-item-img"
        />
        <span className="favorite-home-list-item-name">
          Apart hotel Stare Miasto
        </span>
        <span className="favorite-home-list-item-city">Madrid</span>
        <span className="favorite-home-list-item-price">
          Starting from $120
        </span>
        <div className="favorite-home-list-item-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="favorite-home-list-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="favorite-home-list-item-img"
        />
        <span className="favorite-home-list-item-name">
          Comfort Suites Airport
        </span>
        <span className="favorite-home-list-item-city">Austin</span>
        <span className="favorite-home-list-item-price">
          Starting from $140
        </span>
        <div className="favorite-home-list-item-rating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="favorite-home-list-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/210800156.webp?k=5a6391f0f677b298aab26229cef3a23da0b2469095950a21e43ddbe3d3c9eda7&amp;o="
          alt=""
          className="favorite-home-list-item-img"
        />
        <span className="favorite-home-list-item-name">Four Seasons Hotel</span>
        <span className="favorite-home-list-item-city">Lisbon</span>
        <span className="favorite-home-list-item-price">Starting from $99</span>
        <div className="favorite-home-list-item-rating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="favorite-home-list-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="favorite-home-list-item-img"
        />
        <span className="favorite-home-list-item-name">Hilton Garden Inn</span>
        <span className="favorite-home-list-item-city">Berlin</span>
        <span className="favorite-home-list-item-price">
          Starting from $105
        </span>
        <div className="favorite-home-list-item-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteHomeList;