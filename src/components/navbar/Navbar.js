import "./Navbar.css"

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-container">
          <span className="logo">BoBoBooking</span>
          <div className="navbar-button">
            <button className="navbar-button-item">Register</button>
            <button className="navbar-button-item">Login</button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;