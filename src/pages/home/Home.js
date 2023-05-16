import CityList from "../../components/city-list/CityList";
import FavoriteHomeList from "../../components/favorite-home-list/FavoriteHomeList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mail-list/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/property-list/PropertyList";
import "./Home.css";

const Home = () => {
    return (
      <div>
        <Navbar />
        <Header />
        <section className="home-container">
          <h1 className="home-container-title">Trending Destinations</h1>
          <CityList />
          <h1 className="home-container-title">Browse by property type</h1>
          <PropertyList />
          <h1 className="home-container-title">Homes guests love</h1>
          <FavoriteHomeList />
          <MailList />
          <Footer />
        </section>
      </div>
    );
}

export default Home;