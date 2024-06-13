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
import AboutPage from "./pages/AboutPage";
import TourPage from "./pages/TourPage";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import Footer from "./components/Footer";
import CustomizeBooking from "./components/CustomizeBooking";
import CustomizeBookingPage from "./pages/CustomizeBookingPage";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App({ props }) {
  return (
    <div>
      <Router>
        <TopNav />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/details/:id" element={<TourDetailsPage />}></Route>
          <Route path="/booking/:id" element={<BookingPage />}></Route>
          <Route path="/customize-booking" element={<CustomizeBookingPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/tours" element={<TourPage />}></Route>
          <Route path="/team" element={<TeamPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/blog-details/:id" element={<BlogDetailsPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
