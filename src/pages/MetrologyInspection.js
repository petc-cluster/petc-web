import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import "../pages/MetrologyInspection.css"; // Add your custom styles for this page
import scanning3d from "../assets/mi/3d-scanning.jpg";

function MetrologyInspection() {
  // Create refs for each service section
  const metalDMLSRef = useRef(null);
  const polymerRef = useRef(null);

  // Function to handle scroll to section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, // Offset for any fixed header
      behavior: "smooth",
    });
  };

  return (
    <div className="additive-manufacturing-container">
      <h1>Metrology Inspection</h1>

      {/* Service Sections */}
      <div className="service-section" ref={metalDMLSRef}>
        <img src={scanning3d} alt="Metal DMLS" className="service-image" />
        <div className="service-text">
          <h2>3D Scanning</h2>
          <p>
            Discover the power of advanced 3D scanning technology that
            transforms the way you capture, analyze, and utilize data. Our
            state-of-the-art 3D scanner offers high-speed data acquisition with
            exceptional detail, making it the ideal solution for a wide range of
            applications across various industries.
          </p>
          <Link
            to="/services/metrology-inspection/3d-scanning"
            className="learn-more"
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* <div className="line"></div> */}

      {/* Back to Services Link */}
      <div className="back-to-services">
        <Link to="/services" className="back-link">
          Back to Services
        </Link>
      </div>
    </div>
  );
}

export default MetrologyInspection;
