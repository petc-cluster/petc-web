import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import AboutUs from "./AboutUs";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import NotFound from "./NotFound";
import AdditiveManufacturing from "./pages/AdditiveManufacturing";
import Metal from "./pages/Metal";
import DesignAnalysis from "./pages/DesignAnalysis";
import MetrologyInspection from "./pages/MetrologyInspection";
import Scanning from "./pages/learnMore/scanning3d";
import Contact from "./Contact";

// Component to scroll to the top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(-1, -1);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <ScrollToTop /> {/* Add ScrollToTop component */}
        <main className="main-content">
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="services/additive-manufacturing"
              element={<AdditiveManufacturing />}
            />
            <Route
              path="/services/additive-manufacturing/metal-3d-printing"
              element={<Metal />}
            />
            <Route
              path="/services/design-analysis"
              element={<DesignAnalysis />}
            />
            <Route
              path="/services/metrology-inspection"
              element={<MetrologyInspection />}
            />
            {/*Learn More*/}
            <Route
              path="/services/metrology-inspection/3d-scanning"
              element={<Scanning />}
            />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <div className="contact">
          <Contact />
        </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
