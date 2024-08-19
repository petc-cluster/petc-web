import React, { useState } from "react";
import "./Metal.css";

function Metal() {
  const [activeTab, setActiveTab] = useState("overview");

  const scrollToSection = (id) => {
    setActiveTab(id);

    const element = document.getElementById(id);
    const headerOffset = -100; // Negative offset value

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition + headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="metal-container">
      <h1 className="metal-heading">Metal 3D Printing</h1>

      <div className="tabs-container">
        <button
          className={`tab ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => scrollToSection("overview")}
        >
          Overview
        </button>
        <button
          className={`tab ${activeTab === "application" ? "active" : ""}`}
          onClick={() => scrollToSection("application")}
        >
          Application
        </button>
        <button
          className={`tab ${activeTab === "materials" ? "active" : ""}`}
          onClick={() => scrollToSection("materials")}
        >
          Materials
        </button>
        <button
          className={`tab ${activeTab === "design" ? "active" : ""}`}
          onClick={() => scrollToSection("design")}
        >
          Design
        </button>
        <button
          className={`tab ${activeTab === "post-processing" ? "active" : ""}`}
          onClick={() => scrollToSection("post-processing")}
        >
          Post Processing
        </button>
        <button
          className={`tab ${activeTab === "faq" ? "active" : ""}`}
          onClick={() => scrollToSection("faq")}
        >
          FAQ
        </button>
      </div>

      <div className="content-container">
        <section className="content-section" id="overview">
          <h2>Overview</h2>
          <p>
            Information about Metal DMLS Overview. This section includes general
            information about the Metal Direct Metal Laser Sintering process.
          </p>
        </section>
        <section className="content-section" id="application">
          <h2>Application</h2>
          <p>
            Information about Metal DMLS Application. This section includes
            details on the various applications of Metal DMLS technology.
          </p>
        </section>
        <section className="content-section" id="materials">
          <h2>Materials</h2>
          <p>
            Information about Materials used in Metal DMLS. This section
            provides details on the materials compatible with Metal DMLS.
          </p>
          <table className="materials-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Type</th>
                <th>Application</th>
                <th>Properties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Titanium Alloy</td>
                <td>Metal</td>
                <td>Aerospace, Medical</td>
                <td>High strength, Lightweight</td>
              </tr>
              <tr>
                <td>Stainless Steel</td>
                <td>Metal</td>
                <td>Industrial, Automotive</td>
                <td>Corrosion resistant, Strong</td>
              </tr>
              <tr>
                <td>Cobalt Chrome</td>
                <td>Metal</td>
                <td>Medical, Aerospace</td>
                <td>Wear resistant, High hardness</td>
              </tr>
              <tr>
                <td>Aluminum Alloy</td>
                <td>Metal</td>
                <td>Automotive, Consumer Goods</td>
                <td>Lightweight, Good thermal conductivity</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="content-section" id="design">
          <h2>Design</h2>
          <p>
            Information about Design considerations for Metal DMLS. This section
            includes guidelines and best practices for designing parts for Metal
            DMLS.
          </p>
        </section>
        <section className="content-section" id="post-processing">
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
        </section>
      </div>
    </div>
  );
}

export default Metal;
