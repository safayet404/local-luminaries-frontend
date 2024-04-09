import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import TopNav from "./components/TopNav";
import "./App.css";
import HomeBanner from "./components/HomeBanner";
import Activity from "./components/Activity";
import TourDetails from "./components/TourDetails";
import TourDetailsPage from "./pages/TourDetailsPage";
import BookingPage from "./pages/BookingPage";
import { Switch } from "react-router-dom";

function App({ props }) {
  return (
    <div>
      <Router>
        <TopNav />

        <Routes>
          <Route path="/" element={<HomeBanner />}></Route>
          <Route path="/details" element={<TourDetailsPage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
