import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import am from "./assets/services/am.jpg";
import metrologyInspection from "./assets/services/Metrology-Inspection.jpg";

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
          style={{ backgroundImage: `url(${am})` }}
          onClick={() => scrollToSection(additiveRef)}
        >
          <div className="tile-text">Additive Manufacturing</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: `url(${metrologyInspection})` }}
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
        {/* <div
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
        </div> */}
      </div>

      {/* Service Sections */}
      <div className="service-section" ref={additiveRef}>
        <img src={am} alt="Service 1" className="service-image" />
        <div className="service-text">
          <h2>Additive Manufacturing</h2>
          <p>
            Additive manufacturing, or 3D printing, is a process of creating
            objects by adding material layer by layer from a digital model.
            Unlike traditional methods that remove material, it builds directly
            from a digital file, offering design flexibility and reducing waste.
            Used in industries like aerospace, healthcare, and automotive, it
            enables the production of complex parts and innovative products
            efficiently.
          </p>
          <Link to="/services/additive-manufacturing" className="learn-more">
            Learn More
          </Link>
        </div>
      </div>
      {/* <div className="line"></div> */}

      <div className="service-section" ref={metrologyRef}>
        <img
          src={metrologyInspection}
          alt="Service 2"
          className="service-image"
        />
        <div className="service-text">
          <h2>Metrology Inspection</h2>
          <p>
            Metrology inspection is the process of measuring and verifying the
            accuracy of parts, components, or products to ensure they meet
            specified standards and tolerances. It involves using precise
            measurement tools and techniques to assess dimensions, geometries,
            and surface qualities. This process is crucial in manufacturing and
            engineering to maintain quality, consistency, and compliance with
            industry standards, ensuring that the final products function as
            intended.
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
            Design and analysis involve creating and evaluating concepts,
            models, or systems to ensure they meet specific functional,
            aesthetic, and performance criteria. Design focuses on developing
            innovative solutions, while analysis involves testing and refining
            these designs through simulations, calculations, and assessments.
            Together, they ensure that products or systems are optimized for
            performance, durability, and usability before they are manufactured
            or implemented.
          </p>
          <Link to="/services/design-analysis" className="learn-more">
            Learn More
          </Link>
        </div>
      </div>

      {/* <div className="line"></div> */}

      {/* <div className="service-section" ref={testingRef}>
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
      </div> */}
      {/* <div className="line"></div> */}

      {/* <div className="service-section" ref={trainingRef}>
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
      </div> */}
    </div>
  );
}

export default Services;
