import React, { useState } from "react";
import Modal from "./modal/Modal";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer>
      <div className="footer-container">
        {/* Office Contact */}
        <div className="footer-column">
          <h2>Office Contact</h2>
          <p>Precision Engineering and Technology Centre</p>
          <p>PP3, SIDCO Industrial Estate, Centre of Excellence,</p>
          <p>Thirumudivakkam, Chennai-600 132</p>
          <p>Phone: 044-47985566</p>
          <p>Email: info@petechcentre.com</p>
          <div className="card">
            {/* <a className="socialContainer containerOne" href="#">
          <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
          </svg>
        </a>

        <a className="socialContainer containerTwo" href="#">
          <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
          </svg>
        </a> */}

            <a
              className="socialContainer containerThree"
              href="https://www.linkedin.com/company/petechcentre/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>

            {/* <a className="socialContainer containerFour" href="#">
              <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.924 4.662c-.002 3.633-2.96 6.591-6.588 6.591zm3.66-4.945c-.201-.1-1.186-.585-1.37-.652-.184-.067-.318-.1-.451.1-.133.197-.517.652-.634.787-.117.133-.234.15-.435.05a5.332 5.332 0 0 1-1.575-.975 5.918 5.918 0 0 1-1.093-1.347c-.115-.198-.012-.305.087-.404.09-.09.2-.234.3-.35a1.364 1.364 0 0 0 .2-.335c.067-.134.034-.251-.017-.35-.05-.1-.451-1.085-.618-1.485-.162-.389-.328-.336-.451-.342l-.384-.007a.728.728 0 0 0-.529.25 2.24 2.24 0 0 0-.732 1.67c0 .497.367.977.417 1.045.05.067.734 1.172 1.777 1.644 1.043.47 1.043.314 1.229.297.2-.017 1.186-.484 1.354-1.009.167-.525.167-.975.117-1.045-.05-.066-.184-.1-.384-.2z"></path>
              </svg>
            </a> */}
          </div>
        </div>

        {/* Contact Our Team */}
        <div className="contact-team">
          <div className="contact-team-header">
            <h2>Contact Our Team</h2>
          </div>
          <div className="contact-team-details">
            <div className="contact-person">
              <p>A N Praveen Raj</p>
              <p>Project Associate - Innovation Management</p>
              <p>+91-8095888042</p>
              <p>Email: design@petechcentre.com</p>
            </div>
            <div className="contact-person">
              <p>K Mohan Kumar</p>
              <p>Project Associate - Additive Manufacturing</p>
              <p>+91-9600625532</p>
              <p>Email: amlab@petechcentre.com</p>
            </div>
          </div>
        </div>
        <iframe
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092557949394!2d144.96328031571953!3d-37.8161780797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776b13d9bd7e44!2s1234%20Venture%20Road%2C%20Innovation%20City%2C%20XYZ%2056789!5e0!3m2!1sen!2sus!4v1630988675669!5m2!1sen!2sus"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=12.969741940314842, 80.09395254920679&amp;q=Precision%20Engineering%20Technology%20center,%20PETC%2C%20Thirumudivakam%2C%20Tamil%20Nadu&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          width="50%"
          height="250"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
          className="map"
        ></iframe>
      </div>

      {/* Uncomment and use the following when needed */}
      {/* <ul className="example-2">
        <li className="icon-content">
          <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <div className="filled"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor"></path>
            </svg>
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>
      </ul> */}

      {/* <button className="contact-button" onClick={openModal}>Contact Us</button> */}

      {/* Modal for Contact */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Contact Us</h2>
        <p>Please fill out the form below and we will get back to you soon.</p>
        <form>
          <label>
            Name:
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Your Email" />
          </label>
          <label>
            Message:
            <textarea placeholder="Your Message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </Modal>

      {/* Copyright */}
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Precision Engineering and Technology
        Centre. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
