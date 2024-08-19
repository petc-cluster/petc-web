import React, { useRef, useState } from "react";
// import "./Metal.css";

function Scanning() {
  const [activeTab, setActiveTab] = useState("overview");
  const overviewRef = useRef(null);
  const keyRef = useRef(null);
  const techRef = useRef(null);
  const whyRef = useRef(null);

  const scrollToSection = (ref, id) => {
    setActiveTab(id);
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="metal-container">
      <h1 className="metal-heading">3D Scanning</h1>

      <div className="tabs-container">
        <button
          className={`tab ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => scrollToSection(overviewRef, "overview")}
        >
          Overview
        </button>
        <button
          className={`tab ${activeTab === "key" ? "active" : ""}`}
          onClick={() => scrollToSection(keyRef, "key")}
        >
          Key Features and Benefits
        </button>
        <button
          className={`tab ${activeTab === "tech" ? "active" : ""}`}
          onClick={() => scrollToSection(techRef, "tech")}
        >
          Technical Specifications
        </button>
        <button
          className={`tab ${activeTab === "why" ? "active" : ""}`}
          onClick={() => scrollToSection(whyRef, "why")}
        >
          Why Choose us
        </button>
        {/* <button
          className={`tab ${activeTab === "post-processing" ? "active" : ""}`}
          onClick={() => scrollToSection("post-processing")}
        >
          Post Processing.
        </button>
        <button
          className={`tab ${activeTab === "faq" ? "active" : ""}`}
          onClick={() => scrollToSection("faq")}
        >
          FAQ
        </button> */}
      </div>

      <div className="content-container">
        <section className="content-section" id="overview" ref={overviewRef}>
          <h2>Overview</h2>
          <p>
            Discover the power of advanced 3D scanning technology that
            transforms the way you capture, analyze, and utilize data. Our
            state-of-the-art 3D scanner offers high-speed data acquisition with
            exceptional detail, making it the ideal solution for a wide range of
            applications across various industries.
          </p>
        </section>
        <section className="content-section" id="key" ref={keyRef}>
          <h2>Key Features and Benefits</h2>
          <h3>Smart Data Capture Technology:</h3>
          <p>
            Our advanced technology enables high-speed data acquisition while
            maintaining exceptional data quality. It allows for adjustable
            measurement resolution tailored to specific applications.
          </p>
          <h3>Versatile Applications:</h3>
          <p>
            Ideal for reverse engineering, quality control, prototyping, and
            digital twin creation, our 3D scanning services are applicable
            across multiple industries, including automotive, aerospace,
            healthcare, and manufacturing.
          </p>
        </section>
        <section className="content-section" id="tech" ref={techRef}>
          <h2>Technical Specifications</h2>
          {/* <p>
            Information about Materials used in Metal DMLS. This section
            provides details on the materials compatible with Metal DMLS.
          </p> */}
          <table className="materials-table">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Resolution</td>
                <td>Resolution 12 MP</td>
              </tr>
              <tr>
                <td>Field of View</td>
                <td>Field of View 200 mm and 500 mm</td>
              </tr>
              <tr>
                <td>Accuracy</td>
                <td>As per VDI/VDE 2634 Part 3</td>
              </tr>
              <tr>
                <td>Probing Error Size</td>
                <td>
                  Probing Error Size 0.006 mm (FOV 200), 0.015 mm (FOV 500)
                </td>
              </tr>
              <tr>
                <td>Probing Error Form</td>
                <td>
                  Probing Error Form 0.006 mm (FOV 200), 0.015 mm (FOV 500)
                </td>
              </tr>
              <tr>
                <td>Sphere Spacing Error</td>
                <td>
                  Sphere Spacing Error 0.009 mm (FOV 200), 0.021 mm (FOV 500)
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="content-section" id="why" ref={whyRef}>
          <h2>Why Choose Our 3D Scanning Services?</h2>
          <p>
            Precision and Accuracy: Our 3D scanner captures millions of data
            points, creating detailed digital twins of your objects with high
            accuracy, essential for quality assurance and product development.
          </p>
          <p>
            Comprehensive Data Analysis: Utilize the captured data for CAD
            comparisons, dimensional calculations, and trend analysis, enhancing
            your design and manufacturing processes.
          </p>
          <p>
            Industry Expertise: Our team of experts is dedicated to providing
            tailored solutions that meet your specific needs, ensuring you
            receive the highest level of service and support.
          </p>
        </section>
        {/* <section className="content-section" id="post-processing">
          <h2>Post Processing</h2>
          <p>
            Information about Post Processing for Metal DMLS. This section
            covers the steps and techniques used after the Metal DMLS process to
            finish the parts.
          </p>
        </section>
        <section className="content-section" id="faq">
          <h2>FAQ</h2>
          <p>
            Information about Post Processing for Metal DMLS. This section
            covers the steps and techniques used after the Metal DMLS process to
            finish the parts.
          </p>
        </section> */}
      </div>
    </div>
  );
}

export default Scanning;
