/** @format */

import "./HotelSearch.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import HotelSearchListItem from "../../components/hotel-search-list/HotelSearchList";
import { useState } from "react";

const HotelSearchPage = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="hotels-search-page" />
      <div className="hotels-search-page-container">
        <div
          className="hotels-search-page-wrapper"
        >
          <div
            className="hotels-search-page-search"
          >
            <h1
              className="hotels-search-page-search-title"
            >
              Search
            </h1>
            <div
              className="hotels-search-page-search-item"
            >
              <label>Destination</label>
              <input type="search-item-text" placeholder={destination} />
            </div>
            <div
              className="hotels-search-page-search-item"
            >
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {format(date[0].startDate, "dd/MM/yyyy")} —{" "}
                {format(date[0].endDate, "dd/MM/yyyy")}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div
              className="hotels-search-page-search-item"
            >
              <label>Options</label>
              <div
                className="hotels-search-page-options"
              >
                <div
                  className="hotels-search-page-option-item"
                >
                  <span
                    className="hotels-search-page-option-item-text"
                  >
                    Min price <small> per night</small>
                  </span>
                  <input
                    type="number"
                    className="hotels-search-page-option-item-input"
                  />
                </div>
                <div
                  className="hotels-search-page-option-item"
                >
                  <span
                    className="hotels-search-page-option-item-text"
                  >
                    Max price <small> per night</small>
                  </span>
                  <input
                    type="number"
                    className="hotels-search-page-option-item-input"
                  />
                </div>
                <div
                  className="hotels-search-page-option-item"
                >
                  <span
                    className="hotels-search-page-option-item-text"
                  >
                    Adults
                  </span>
                  <input
                    type="number"
                    className="hotels-search-page-option-item-input"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div
                  className="hotels-search-page-option-item"
                >
                  <span
                    className="hotels-search-page-option-item-text"
                  >
                    Children
                  </span>
                  <input
                    type="number"
                    className="hotels-search-page-option-item-input"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div
                  className="hotels-search-page-option-item"
                >
                  <span
                    className="hotels-search-page-option-item-text"
                  >
                    Room
                  </span>
                  <input
                    type="number"
                    className="hotels-search-page-option-item-input"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button
              className="hotels-search-page-search-item-button"
            >
              Search
            </button>
          </div>
          <div
            className="hotels-search-page-result"
          >
            <HotelSearchListItem />
            <HotelSearchListItem />
            <HotelSearchListItem />
            <HotelSearchListItem />
            <HotelSearchListItem />
            <HotelSearchListItem />
            <HotelSearchListItem />
            <HotelSearchListItem />
            <HotelSearchListItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchPage;
