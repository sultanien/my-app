/** @format */

import "./Header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlaneDeparture,
  faIcons,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate()

  function handleOptions(name, operation) {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  }

  function handleSearch(){
    navigate("/hotels", {state:{ destination, date, options }})
  }

  return (
    <div className="header">
      <div
        className={
          type === "hotels-search-page"
            ? "header-container list-mode"
            : "header-container"
        }
      >
        <div className="header-container-list">
          <div className="header-container-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span> Stays</span>
          </div>
          <div className="header-container-list-item">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span> Flights</span>
          </div>
          <div className="header-container-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span> Car Rentals</span>
          </div>
          <div className="header-container-list-item">
            <FontAwesomeIcon icon={faIcons} />
            <span> Attractions</span>
          </div>
          <div className="header-container-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span> Airport Taxis</span>
          </div>
        </div>
        {type !== "hotels-search-page" && (
          <div>
            <h1 className="header--title">Sign in, save money</h1>
            <p className="header--description">
              Save 10% or more at participating properties – just look for the
              blue Genius label.
            </p>
            <button className="header--button">Sign in or register</button>
            <div className="header--searchbar">
              <div className="header--searchbar-item">
                <FontAwesomeIcon
                  icon={faBed}
                  className="header--searchbar-icon"
                />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header--searchbar-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header--searchbar-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header--searchbar-icon"
                />
                <span
                  onClick={() => {
                    setOpenOptions(false);
                    setOpenDate(!openDate);
                  }}
                  className="header--searchbar-item-span"
                >
                  {format(date[0].startDate, "dd/MM/yyyy")} —{" "}
                  {format(date[0].endDate, "dd/MM/yyyy")}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="header--searchbar-date-range"
                  />
                )}
              </div>
              <div className="header--searchbar-item">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="header--searchbar-icon"
                />
                <span
                  onClick={() => {
                    setOpenDate(false);
                    setOpenOptions(!openOptions);
                  }}
                  className="header--searchbar-item-span"
                >
                  {options.adult} {options.adult > 1 ? "Adults" : "Adult"} |{" "}
                  {options.children}{" "}
                  {options.children === 1 ? "Child" : "Children"} |{" "}
                  {options.room} {options.room > 1 ? "Rooms" : "Room"}
                </span>
                {openOptions && (
                  <div className="header--searchbar-options">
                    <div className="header--searchbar-options-item">
                      <span className="header--searchbar-options-item-text">
                        Adults
                      </span>
                      <div className="header--searchbar-options-counter">
                        <button
                          disabled={options.adult <= 1}
                          className="header--searchbar-options-counter-button"
                          onClick={() => handleOptions("adult", "decrease")}
                        >
                          -
                        </button>
                        <span className="header--searchbar-options-count">
                          {options.adult}
                        </span>
                        <button
                          className="header--searchbar-options-counter-button"
                          onClick={() => handleOptions("adult", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="header--searchbar-options-item">
                      <span className="header--searchbar-options-item-text">
                        Children
                      </span>
                      <div className="header--searchbar-options-counter">
                        <button
                          disabled={options.children <= 0}
                          className="header--searchbar-options-counter-button"
                          onClick={() => handleOptions("children", "decrease")}
                        >
                          -
                        </button>
                        <span className="header--searchbar-options-count">
                          {options.children}
                        </span>
                        <button
                          className="header--searchbar-options-counter-button"
                          onClick={() => handleOptions("children", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="header--searchbar-options-item">
                      <span className="header--searchbar-options-item-text">
                        Room
                      </span>
                      <div className="header--searchbar-options-counter">
                        <button
                          disabled={options.room <= 1}
                          className="header--searchbar-options-counter-button"
                          onClick={() => handleOptions("room", "decrease")}
                        >
                          -
                        </button>
                        <span className="header--searchbar-options-count">
                          {options.room}
                        </span>
                        <button
                          className="header--searchbar-options-counter-button"
                          onClick={() => handleOptions("room", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header--searchbar-item">
                <button className="header--button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
