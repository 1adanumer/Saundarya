import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";  
import Home from "./assets/pages/Home/Home";
import AnnouncementBar from "./assets/components/AnnouncementBar/AnnouncementBar";


const App = () => {
  return (
    <Router>
            {/* Add persistent components like Header */}
            <AnnouncementBar  />
            <Navbar />

            {/* Define routes for each page */}
            <Routes>
                <Route path="/" element={<Home />} />
                
                
            
            </Routes>

            {/* Add Footer */}
            <Footer />
        </Router>
  );
};

export default App;