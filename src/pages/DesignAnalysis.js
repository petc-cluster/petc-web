import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../pages/DesignAnalysis.module.css"; // Add your custom styles for this page
import centralImage from "../assets/PETC_ser.png";

function DesignAnalysis() {
  // Create refs for each service section
  const dfamRef = useRef(null);
  const doeRef = useRef(null);
  const topologyRef = useRef(null);
  const asstes3dRef = useRef(null);
  const camRef = useRef(null);
  const moldFlowRef = useRef(null);
  const moldDesignRef = useRef(null);
  const simulationRef = useRef(null);

  // Function to handle scroll to section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, // Offset for any fixed header
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.design_analysis_container}>
      <h1>Design & Analysis</h1>

      {/* Services Section */}
      <div className={styles.services_section}>
        {/* <h2>Our Services</h2> */}
        <div className={styles.circle_container}>
          <div className={styles.center_image}>
            <img
              src={centralImage}
              alt="Central Logo"
              className={styles.central_logo}
            />
          </div>
          <div className={styles.service_list}>
            <div
              className={styles.service_item}
              onClick={() => scrollToSection(dfamRef)}
            >
              <h3>Design for Additive Manufacturing</h3>
              <h3>(DFAM)</h3>
              <p>
                Ensuring that data is optimized for efficient processing and
                analysis.
              </p>
            </div>
            <div
              className={styles.service_item}
              onClick={() => scrollToSection(doeRef)}
            >
              <h3>Data Optimization (DOE)</h3>
              <p>
                Surface finishing, coloring, and other post-processes to enhance
                the final product.
              </p>
            </div>
            <div
              className={styles.service_item}
              onClick={() => scrollToSection(topologyRef)}
            >
              <h3>Topology Optimization</h3>
              <p>
                Utilizing state-of-the-art 3D printing technologies to create
                high-quality products.
              </p>
            </div>
            <div
              className={styles.service_item}
              onClick={() => scrollToSection(asstes3dRef)}
            >
              <h3>3D Assets</h3>
              <p>
                Design of implants, prosthetic & Engineering parts through our
                customer experience, innovation & incubation centre.
              </p>
            </div>
            <div
              className={styles.service_item}
              onClick={() => scrollToSection(camRef)}
            >
              <h3>Computer Aided Manufacturing(CAM)</h3>
              <p>
                Helping you choose the best manufacturing process for your
                specific needs.
              </p>
            </div>
            <div
              className={styles.service_item}
              onClick={() => scrollToSection(moldFlowRef)}
            >
              <h3>Mold Flow Analysis</h3>
              <p>
                Offering expert advice on selecting the right materials for your
                projects.
              </p>
            </div>
            <div
              className={styles.service_item}
              onClick={() => scrollToSection(moldDesignRef)}
            >
              <h3>Mold Design</h3>
              <p>Optimizing the structural design</p>
              <p>to achieve the best performance</p>
              <p>and efficiency.</p>
            </div>
            <div
              className={styles.service_item}
              onClick={() => scrollToSection(simulationRef)}
            >
              <h3>Simulation of Product</h3>
              <p>
                Optimizing the structural design to achieve the best performance
                and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tiles Section */}
      {/* <div className="tiles-container">
        <div
          className="tile"
          style={{ backgroundImage: "url(https://via.placeholder.com/300)" }}
          onClick={() => scrollToSection(design1Ref)}
        >
          <div className="tile-text">Design 1</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: "url(https://via.placeholder.com/300)" }}
          onClick={() => scrollToSection(design2Ref)}
        >
          <div className="tile-text">Design 2</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: "url(https://via.placeholder.com/300)" }}
          onClick={() => scrollToSection(design3Ref)}
        >
          <div className="tile-text">Design 3</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: "url(https://via.placeholder.com/300)" }}
          onClick={() => scrollToSection(design4Ref)}
        >
          <div className="tile-text">Design 4</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: "url(https://via.placeholder.com/300)" }}
          onClick={() => scrollToSection(design5Ref)}
        >
          <div className="tile-text">Design 5</div>
        </div>
      </div> */}

      {/* Service Sections */}
      <div className={styles.service_section} ref={dfamRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Analysis Techniques"
          className={styles.service_image}
        />
        <div className={styles.service_text}>
          <h2>Design for Additive Manufacturing</h2>
          <p>
            Description for Analysis Techniques. This section provides details
            about various design analysis techniques.
          </p>
          <Link
            to="/services/design-analysis/techniques"
            className={styles.learn_more}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className={styles.service_section} ref={doeRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Case Studies"
          className={styles.service_image}
        />
        <div className={styles.service_text}>
          <h2>Data Optimization (DOE)</h2>
          <p>
            Description for Case Studies. This section provides details about
            various design analysis case studies.
          </p>
          <Link
            to="/services/design-analysis/case-studies"
            className={styles.learn_more}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className={styles.service_section} ref={topologyRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Case Studies"
          className={styles.service_image}
        />
        <div className={styles.service_text}>
          <h2>Topology Optimization</h2>
          <p>
            Description for Case Studies. This section provides details about
            various design analysis case studies.
          </p>
          <Link
            to="/services/design-analysis/case-studies"
            className={styles.learn_more}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className={styles.service_section} ref={asstes3dRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Case Studies"
          className={styles.service_image}
        />
        <div className={styles.service_text}>
          <h2>3D Assets</h2>
          <p>
            CATTA is the World's Leading Solution for Product Design and
            Experience. It is used by leading organizations in multiple
            industries to develop the products we see and use in our everyday
            lives. CATIA, powered by Dassault Systèmes' 3 DEXPERIENCE platform
          </p>
          <Link
            to="/services/design-analysis/case-studies"
            className={styles.learn_more}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className={styles.service_section} ref={camRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Case Studies"
          className={styles.service_image}
        />
        <div className={styles.service_text}>
          <h2>Computer Aided Manufacturing(CAM)</h2>
          <p>
            Computer Aided Manufacturing (CAM) is the use of software and
            comput-er-controlled machinery to automate a manufacturing process.
            Based on that definition, you need three components for a CAM system
            to function: Software that tells a machine how to make a product by
            generating toolpaths.
          </p>
          <Link
            to="/services/design-analysis/case-studies"
            className={styles.learn_more}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className={styles.service_section} ref={moldFlowRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Case Studies"
          className={styles.service_image}
        />
        <div className={styles.service_text}>
          <h2>Mold Flow Analysis</h2>
          <p>
            The process of simulating an injection molding cycle with a
            particular plastic and analyzing the results. Mold flow analysis
            should occur before the injection molding process ever begins,
            through the use of specialized software that simulates the design of
            the part to be manufactured.
          </p>
          <Link
            to="/services/design-analysis/case-studies"
            className={styles.learn_more}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className={styles.service_section} ref={moldDesignRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Case Studies"
          className={styles.service_image}
        />
        <div className={styles.service_text}>
          <h2>Mold Design</h2>
          <p>
            Mold design is a decisive factor for the molding success such as
            dimensioning and location of the sprue gates, dimensioning of shear
            edges, flow aids, cooling and ejector techniques, etc. From: Plastic
            Product Material andProcess Se-lection. A mould cavity defines the
            shape of the part. Material (melted plastic) is injected under
            pressure into the cavity.
          </p>
          <Link
            to="/services/design-analysis/case-studies"
            className={styles.learn_more}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className={styles.service_section} ref={simulationRef}>
        <img
          src="https://via.placeholder.com/300"
          alt="Case Studies"
          className={styles.service_image}
        />
        <div className={styles.service_text}>
          <h2>Simulation of Product</h2>
          <p>
            Virtually simulate product design and performance with comprehensive
            multi physics simulation capabilities. Virtual simulation reduces
            the need for expensive and time consuming physical testing as well
            as increase confidence and certainty that products will
            perform as designed
          </p>
          <Link
            to="/services/design-analysis/case-studies"
            className={styles.learn_more}
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Back to Services Link */}
      <div className={styles.back_to_services}>
        <Link to="/services" className={styles.back_link}>
          Back to Services
        </Link>
      </div>
    </div>
  );
}

export default DesignAnalysis;
