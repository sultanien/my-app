/** @format */
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mail-list/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { data, loading } = useFetch(`find/${id}`);


 const { dates,options } = useContext(SearchContext);


   const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
   function dayDifference(date1, date2) {
     const timeDiff = Math.abs(date2.getTime() - date1.getTime());
     const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
     return diffDays;
   }

   const visitedDays = dayDifference(dates[0].endDate, dates[0].startDate);


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="hotels-search-page" />
      {loading ? (
        "Loading, please wait!"
      ) : (
        <div className="hotel-page-container">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("left")}
              />
              <div className="slider-wrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="slider-img"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("right")}
              />
            </div>
          )}
          <div className="hotel-page-wrapper">
            <button className="hotel-page-book-now">
              Reserve or Book Now!
            </button>
            <h1 className="hotel-page-title">{data.name}</h1>
            <div className="hotel-page-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotel-page-distance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotel-page-price-highlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotel-page-images">
              {data.photos?.map((photo, i) => (
                <div className="hotel-page-img-wrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotel-page-img"
                  />
                </div>
              ))}
            </div>
            <div className="hotel-page-details">
              <div className="hotel-page-details-text">
                <h1 className="hotel-page-title">{data.title}</h1>
                <p className="hotel-description">{data.desc}</p>
              </div>

              <div className="hotel-page-details-price">
                <h1>Perfect for a {visitedDays}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${visitedDays * options.room * data.cheapestPrice}</b> ({visitedDays} nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
