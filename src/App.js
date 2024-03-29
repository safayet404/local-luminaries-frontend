import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import TopNav from "./components/TopNav";
import './App.css'
import HomeBanner from "./components/HomeBanner";
function App() {
  return (
    <div>

      <TopNav />
      <HomeBanner />
      
    </div>
  );
}

export default App;
