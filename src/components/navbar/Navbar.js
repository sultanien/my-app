import { useContext } from "react";
import "./Navbar.css"
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {

  const {user} = useContext(AuthContext)
    return (
      <div className="navbar">
        <div className="navbar-container">
          <span className="logo">BoBoBooking</span>
          {user ? (user.username ): (<div className="navbar-button">
            <button className="navbar-button-item">Register</button>
            <button className="navbar-button-item">Login</button>
          </div>)}
        </div>
      </div>
    );
};

export default Navbar;