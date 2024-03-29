import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import TopNav from "./components/TopNav";
import './App.css'
import HomeBanner from "./components/HomeBanner";
import Activity from "./components/Activity";
function App() {
  return (
    <Router>
      <TopNav />
      <HomeBanner />

      
     
      
    </Router>
  );
}

export default App;
