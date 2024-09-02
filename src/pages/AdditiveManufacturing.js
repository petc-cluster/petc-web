import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../pages/AdditiveManufacturing.css"; // Add your custom styles for this page
import metal3dPrinting from "../assets/am/metal-3d-printing.jpg";
import polymer3dPrinting from "../assets/am/polymer-3d-printing.jpg";
import MSLA from "../assets/am/MSLA-Stereolithography.jpg";
import fusedDepositionModeling from "../assets/am/Fused-Deposition-Modeling.jpg";
import desktopSLS from "../assets/am/Desktop-SLS.png";

function AdditiveManufacturing() {
  // Create refs for each service section
  const metal3dSRef = useRef(null);
  const polymer3dRef = useRef(null);
  const msladRef = useRef(null);
  const fusedRef = useRef(null);
  const desktopslsRef = useRef(null);

  // Function to handle scroll to section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, // Offset for any fixed header
      behavior: "smooth",
    });
  };

  return (
    <div className="additive-manufacturing-container">
      <h1>Additive Manufacturing</h1>

      {/* Tiles Section */}
      <div className="tiles-container">
        <div
          className="tile"
          style={{ backgroundImage: `url(${metal3dPrinting})` }}
          onClick={() => scrollToSection(metal3dSRef)}
        >
          <div className="tile-text">Metal 3D Printing</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: `url(${polymer3dPrinting})` }}
          onClick={() => scrollToSection(polymer3dRef)}
        >
          <div className="tile-text">Polymer 3D Printing</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: `url(${MSLA})` }}
          onClick={() => scrollToSection(msladRef)}
        >
          <div className="tile-text">MSLA Stereolithography</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: `url(${fusedDepositionModeling})` }}
          onClick={() => scrollToSection(fusedRef)}
        >
          <div className="tile-text">Fused Deposition Modeling</div>
        </div>
        <div
          className="tile"
          style={{ backgroundImage: `url(${desktopSLS})` }}
          onClick={() => scrollToSection(desktopslsRef)}
        >
          <div className="tile-text">Desktop SLS</div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="service-section" ref={metal3dSRef}>
        <img src={metal3dPrinting} alt="Metal DMLS" className="service-image" />
        <div className="service-text">
          <h2>Metal 3D Printing</h2>
          <p>
            Metal 3D printing, also known as metal additive manufacturing, is a
            process that creates metal parts by layering powdered metal material
            and fusing it with a heat source, such as a laser or electron beam.
            This technology allows for the production of complex, high-strength
            metal components with intricate geometries that would be difficult
            or impossible to achieve with traditional manufacturing methods.
            Used in industries like aerospace, automotive, and medical, metal 3D
            printing offers the benefits of reduced material waste, faster
            prototyping, and the ability to create custom, lightweight parts
            with superior mechanical properties.
          </p>
          {/* <Link
            to="/services/additive-manufacturing/metal-3d-printing"
            className="learn-more"
          >
            Learn More
          </Link> */}
        </div>
      </div>
      {/* <div className="line"></div> */}

      <div className="service-section" ref={polymer3dRef}>
        <img
          src={polymer3dPrinting}
          alt="Polymer FDM, SLS, MSLA"
          className="service-image"
        />
        <div className="service-text">
          <h2>Polymer 3D Printing</h2>
          <p>
            Polymer 3D printing is a process that creates objects by depositing
            layers of polymer material, such as plastic, based on a digital
            design. This additive manufacturing method is widely used for
            producing prototypes, functional parts, and custom products with
            complex geometries. Polymer 3D printing offers flexibility in
            design, quick turnaround times, and cost-effective production,
            making it popular in industries like consumer goods, healthcare, and
            automotive. It allows for the creation of lightweight, durable parts
            with various mechanical properties, depending on the type of polymer
            used.
          </p>
          {/* <Link to="/services/polymer" className="learn-more">
            Learn More
          </Link> */}
        </div>
      </div>

      <div className="service-section" ref={msladRef}>
        <img src={MSLA} alt="Metal DMLS" className="service-image" />
        <div className="service-text">
          <h2>MSLA Stereolithography</h2>
          <p>
            Masked Stereolithography (MSLA) is an advanced form of
            stereolithography (SLA) used in 3D printing that leverages a
            different approach to curing resin. MSLA provides excellent
            resolution and detail due to the ability to project fine layers of
            light over the entire build area at once. The simultaneous curing of
            an entire layer allows for faster printing compared to SLA's
            point-by-point curing. MSLA printers are often more cost-effective
            compared to traditional SLA systems, offering a good balance between
            performance and price. As MSLA does not rely on a moving laser, it
            reduces mechanical wear and can be more reliable over time.
          </p>
          {/* <Link
            to="/services/additive-manufacturing/metal-dmls"
            className="learn-more"
          >
            Learn More
          </Link> */}
        </div>
      </div>

      <div className="service-section" ref={fusedRef}>
        <img
          src={fusedDepositionModeling}
          alt="FDM"
          className="service-image"
        />
        <div className="service-text">
          <h2>Fused Deposition Modeling</h2>
          <p>
            Fused Deposition Modeling (FDM) is one of the most widely used 3D
            printing technologies. It works by extruding thermoplastic material
            through a heated nozzle, which moves layer by layer to build up the
            part from the bottom up. The material is deposited in a controlled
            manner, solidifying almost immediately after extrusion to form a
            precise 3D object.
          </p>
          {/* <Link
            to="/services/additive-manufacturing/metal-dmls"
            className="learn-more"
          >
            Learn More
          </Link> */}
        </div>
      </div>

      <div className="service-section" ref={desktopslsRef}>
        <img src={desktopSLS} alt="Metal DMLS" className="service-image" />
        <div className="service-text">
          <h2>Desktop SLS</h2>
          <p>
            Selective Laser Sintering (SLS) is an additive manufacturing process
            that uses a high-powered laser to fuse powdered materials layer by
            layer, creating a solid, three-dimensional object. This technique is
            widely used for producing complex and durable parts with intricate
            geometries. SLS is compatible with a variety of materials, including
            plastics, metals, and ceramics, making it versatile for different
            applications. The process does not require support structures,
            allowing for the production of interlocking or movable parts.
          </p>
          {/* <Link
            to="/services/additive-manufacturing/metal-dmls"
            className="learn-more"
          >
            Learn More
          </Link> */}
        </div>
      </div>

      {/* Back to Services Link */}
      <div className="back-to-services">
        <Link to="/services" className="back-link">
          Back to Services
        </Link>
      </div>
    </div>
  );
}

export default AdditiveManufacturing;
