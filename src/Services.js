import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import cover from "./assets/cover.jpg";

function Services() {
  // Create refs for each service section
  const additiveRef = useRef(null);
  const metrologyRef = useRef(null);
  const designRef = useRef(null);
  const testingRef = useRef(null);
  const trainingRef = useRef(null);

  // Function to handle scroll to section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, // Offset for any fixed header
      behavior: "smooth",
    });
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>

      {/* Tiles Section */}
      <div className="tiles-container">
        <div
          className="tile"
          style={{ backgroundImage: `url(${cover})` }}
          onClick={() => scrollToSection(additiveRef)}
        >
          <div className="tile-text">Additive Manufacturing</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: "url(https://via.placeholder.com/300)" }}
          onClick={() => scrollToSection(metrologyRef)}
        >
          <div className="tile-text">Metrology Inspection</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: "url(https://via.placeholder.com/300)" }}
          onClick={() => scrollToSection(designRef)}
        >
          <div className="tile-text">Design & Analysis</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: "url(https://via.placeholder.com/300)" }}
          onClick={() => scrollToSection(testingRef)}
        >
          <div className="tile-text">Testing</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: "url(https://via.placeholder.com/300)" }}
          onClick={() => scrollToSection(trainingRef)}
        >
          <div className="tile-text">Training</div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="service-section" ref={additiveRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Service 1"
          className="service-image"
        />
        <div className="service-text">
          <h2>Additive Manufacturing</h2>
          <p>
            Description for Service 1. This is where you can provide more
            details about the service offered.
          </p>
          <Link to="/services/additive-manufacturing" className="learn-more">
            Learn More
          </Link>
        </div>
      </div>
      {/* <div className="line"></div> */}

      <div className="service-section" ref={metrologyRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Service 2"
          className="service-image"
        />
        <div className="service-text">
          <h2>Metrology Inspection</h2>
          <p>
            Description for Service 2. This section provides an overview of
            another service you offer.
          </p>
          <Link to="/services/metrology-inspection" className="learn-more">
            Learn More
          </Link>
        </div>
      </div>
      {/* <div className="line"></div> */}

      <div className="service-section" ref={designRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Service 1"
          className="service-image"
        />
        <div className="service-text">
          <h2>Design & Analysis</h2>
          <p>
            Description for Service 1. This is where you can provide more
            details about the service offered.
          </p>
          <Link to="/services/design-analysis" className="learn-more">
            Learn More
          </Link>
        </div>
      </div>

      {/* <div className="line"></div> */}

      <div className="service-section" ref={testingRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Service 3"
          className="service-image"
        />
        <div className="service-text">
          <h2>Testing</h2>
          <p>
            Description for Service 3. This is where you can provide more
            details about the service offered.
          </p>
          <Link to="/services/testing" className="learn-more">
            Learn More
          </Link>
        </div>
      </div>
      {/* <div className="line"></div> */}

      <div className="service-section" ref={trainingRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Service 4"
          className="service-image"
        />
        <div className="service-text">
          <h2>Training</h2>
          <p>
            Description for Service 4. This section provides an overview of
            another service you offer.
          </p>
          <Link to="/services/training" className="learn-more">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
