import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelSearchPage from "./pages/hotel-search-page/HotelSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelSearchPage />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </Router>
  );
}

export default App;
