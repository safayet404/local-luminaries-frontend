import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import TopNav from "./components/TopNav";
import './App.css'
import HomeBanner from "./components/HomeBanner";
import Activity from "./components/Activity";
import TourDetails from "./components/TourDetails";
import TourDetailsPage from "./pages/TourDetailsPage";
function App() {
  return (
    <Router>
      <TopNav />
    

      
     <Routes>
      <Route path="/" element={<HomeBanner/>}></Route>
      <Route path="/details" element={<TourDetailsPage/>} ></Route>
     </Routes>
      
    </Router>
  );
}

export default App;
