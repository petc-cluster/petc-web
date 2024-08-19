import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import PETC_logo from "./assets/PETC_logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHeaderTransparent, setHeaderTransparent] = useState(true);
  const menuRef = useRef(null);
  const servicesLinkRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !servicesLinkRef.current.contains(event.target) &&
      !navRef.current.contains(event.target) &&
      !event.target.closest(".hamburger-menu")
    ) {
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleHamburgerMenu = () => {
    setMenuOpen(!isMenuOpen);
    setDropdownOpen(false); // Close dropdown when toggling hamburger
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderTransparent(false);
      document.querySelector(".header-container").classList.add("scrolled");
    } else {
      setHeaderTransparent(true);
      document.querySelector(".header-container").classList.remove("scrolled");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [location.pathname]);

  return (
    <header
      className={`header-container ${
        isHeaderTransparent && location.pathname === "/" ? "transparent" : ""
      }`}
    >
      <div className="header-logo-text">
        <Link to="/" className="header-link">
          <img
            src={PETC_logo}
            alt="Logo"
            style={{ height: "50px", marginRight: "15px" }}
          />
        </Link>
        <Link to="/" className="header-link">
          <div>
            <h1>Precision Engineering and Technology Centre</h1>
            <p>(Precision Mfg. Mega Cluster, Govt. of Tamil Nadu)</p>
          </div>
        </Link>
      </div>

      <div className="hamburger-menu" onClick={toggleHamburgerMenu}>
        &#9776;
      </div>

      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`} ref={navRef}>
        <Link to="/" className="nav-link" onClick={handleLinkClick}>
          Home
        </Link>
        <div className="services-menu-container">
          <Link
            to="/services"
            className="nav-link"
            onClick={handleLinkClick}
            ref={servicesLinkRef}
          >
            Services
          </Link>
          <div
            className={`services-menu ${isDropdownOpen ? "open" : ""}`}
            ref={menuRef}
          >
            <div className="menu-column">
              <Link
                onClick={handleLinkClick}
                to={"/services/additive-manufacturing"}
                className="nav-link-heading"
              >
                Additive Manufacturing
              </Link>
              <div className="dropdown-content">
                <Link
                  to="/services/additive-manufacturing/metal-3d-printing"
                  onClick={handleLinkClick}
                >
                  Metal 3D Printing
                </Link>
                <Link
                  to="/services/polymer-3d-printing"
                  onClick={handleLinkClick}
                >
                  Polymer 3D Printing
                </Link>
                <Link
                  to="/services/msla-stereolithography"
                  onClick={handleLinkClick}
                >
                  MSLA Stereolithography
                </Link>
                <Link
                  to="/services/fused-deposition-modeling"
                  onClick={handleLinkClick}
                >
                  Fused Deposition Modeling
                </Link>
                <Link to="/services/desktop-sls" onClick={handleLinkClick}>
                  Desktop SLS
                </Link>
              </div>
            </div>
            <div className="menu-column">
              <Link
                to="/services/metrology-inspection"
                className="nav-link-heading"
                onClick={handleLinkClick}
              >
                Metrology Inspection
              </Link>
              <div className="dropdown-content">
                <Link to="/services/3d-scanner" onClick={handleLinkClick}>
                  3D Scanner
                </Link>
                {/* <Link to="/services/cmm" onClick={handleLinkClick}>
                  CMM
                </Link> */}
              </div>
            </div>
            <div className="menu-column">
              <Link
                to="/services/design-analysis"
                className="nav-link-heading"
                onClick={handleLinkClick}
              >
                Design & Analysis
              </Link>
              <div className="dropdown-content">
                <Link to="/services/design-analysis" onClick={handleLinkClick}>
                  DFAM
                </Link>
                <Link to="/services/design-analysis" onClick={handleLinkClick}>
                  3D Assets
                </Link>
                <Link to="/services/design-analysis" onClick={handleLinkClick}>
                  Mold Design
                </Link>
                <Link to="/services/design-analysis" onClick={handleLinkClick}>
                  Mold Flow Analysis
                </Link>
              </div>
            </div>
            <div className="menu-column">
              <Link
                to="/services/testing"
                className="nav-link-heading"
                onClick={handleLinkClick}
              >
                Testing
              </Link>
              <div className="dropdown-content">
                <Link to="/services/coating-thicks" onClick={handleLinkClick}>
                  Coating Thicks
                </Link>
                <Link to="/services/cnc-turning" onClick={handleLinkClick}>
                  CNC Turning
                </Link>
              </div>
            </div>
            <div className="menu-column">
              <Link
                to="/services/training"
                className="nav-link-heading"
                onClick={handleLinkClick}
              >
                Training
              </Link>
              <div className="dropdown-content">
                <Link
                  to="/services/additive-manufacturing-training"
                  onClick={handleLinkClick}
                >
                  Additive Manufacturing
                </Link>
                <Link to="/services/design-training" onClick={handleLinkClick}>
                  Design
                </Link>
                <Link
                  to="/services/3d-scanning-training"
                  onClick={handleLinkClick}
                >
                  3D Scanning
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/about-us" className="nav-link" onClick={handleLinkClick}>
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
