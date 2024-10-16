import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import "./Home.css";
// import coverImage from "./assets/home-cover.jpg";
import service1Image from "./assets/services/am.jpg";
import service2Image from "./assets/services/Metrology-Inspection.jpg";
import service3Image from "./assets/home-cover1.jpg";
import galleryImages from "./assets/galleryImages";
import rd from "./assets/vectors/R&D.png";
import msme from "./assets/vectors/msme.png";
import expert from "./assets/vectors/expert.png";
import assurance from "./assets/vectors/assurance.png";
import Seamless_Collaboration from "./assets/vectors/Seamless-Collaboration.png";
import Thorough_Assessment from "./assets/vectors/Thorough_Assessment.png";
import Advanced_Technologies from "./assets/vectors/Advanced_Technologies.png";
import High_Quality_Results from "./assets/vectors/High_Quality_Results.png";
import Open_Communication from "./assets/vectors/Open_Communication.png";
import Feedback_Loop from "./assets/vectors/Feedback_Loop.png";
import Modal from "./modal/Modal";
import centralImage from "./assets/PETC_ser.png";
import axios from "axios";

function Home() {
  const [currentImage, setCurrentImage] = useState(null);
  const galleryRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false); // Quote modal state
  const [modalTitle, setModalTitle] = useState("");
  const [modalDesc, setModalDesc] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    mobileno: "",
    selectedOption: "",
    file: null,
    message: "",
  });
  const [selectedOption, setSelectedOption] = useState(
    "Additive Manufacturing"
  );

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.nextSibling.textContent);
    setQuoteData({
      ...quoteData,
      selectedOption: event.target.nextSibling.textContent,
    });
  };

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   setQuoteData({ ...quoteData, file });
  // };

  // Modal open and close handlers
  const openModal = () => {
    setIsModalOpen(true);
    setSuccessMessage(""); // Reset success message when opening the modal
  };
  const closeModal = () => setIsModalOpen(false);

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setModalTitle("Get a Quote");
    setModalDesc("Please fill out the form below to get a quote.");
    setSuccessMessage(""); // Reset success message when opening the quote modal
  };
  const closeQuoteModal = () => setIsQuoteModalOpen(false);
  const openAnalysisModal = () => {
    setIsQuoteModalOpen(true);
    setModalTitle("Get a Analysis");
    setModalDesc("Please fill out the form below to get an analysis.");
    setSuccessMessage(""); // Reset success message when opening the quote modal
  };

  const openImage = (image) => {
    setCurrentImage(image);
  };

  const closeImage = () => {
    setCurrentImage(null);
  };

  const goToNextImage = () => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.src === currentImage.src
    );
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentImage(galleryImages[nextIndex]);
  };

  const goToPreviousImage = () => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.src === currentImage.src
    );
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImage(galleryImages[prevIndex]);
  };

  const scrollLeft = () => {
    galleryRef.current.scrollBy({
      left: -galleryRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({
      left: galleryRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuoteInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteData({ ...quoteData, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      goToPreviousImage();
    } else if (e.key === "ArrowRight") {
      goToNextImage();
    } else if (e.key === "Escape") {
      closeImage();
    }
  };

  useEffect(() => {
    if (currentImage) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup the event listener when the modal is closed
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/contacts", formData);
      setSuccessMessage("We will get in touch with you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSuccessMessage("There was an error saving the contact.");
    }
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", quoteData.name);
    formData.append("email", quoteData.email);
    formData.append("mobileno", quoteData.mobileno);
    formData.append("selectedOption", quoteData.selectedOption);
    formData.append("file", quoteData.file);
    formData.append("message", quoteData.message);

    try {
      await axios.post("http://localhost:8080/api/quotes/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (modalTitle.includes("Get a Quote")) {
        setSuccessMessage("We will prepare your quote and contact you soon.");
      }
      if (modalTitle.includes("Get a Analysis")) {
        setSuccessMessage(
          "We will prepare your analysis and contact you soon."
        );
      }
      setQuoteData({
        name: "",
        email: "",
        mobileno: "",
        selectedOption: "",
        file: null,
        message: "",
      });
    } catch (error) {
      setSuccessMessage("There was an error processing your request.");
    }
  };

  return (
    <div className="home-container">
      {/* Cover Section */}
      <div className="cover-section">
        <div className="cover-content">
          <h1>Precision Engineering, Just When You Need It</h1>
          {/* <p>Prototype to Full Production, Fast, Efficient and Reliable</p> */}
          <p>Reverse engineering to Manufacturing and Testing</p>

          <div className="cover-buttons">
            {/* <button className="cover-button" onClick={openAnalysisModal}>
              Get DFM Analysis
            </button> */}
            <button class="cta-analysis" onClick={openAnalysisModal}>
              <span class="span">Get Analysis</span>
              <span class="second">
                <svg
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 66 43"
                  height="20px"
                  width="50px"
                >
                  <g
                    fill-rule="evenodd"
                    fill="none"
                    stroke-width="1"
                    stroke="none"
                    id="arrow"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      class="one"
                    ></path>
                    <path
                      fill="#FFFFFF"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      class="two"
                    ></path>
                    <path
                      fill="#FFFFFF"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      class="three"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
            <button class="cta" onClick={openQuoteModal}>
              <span class="span">Get Quote</span>
              <span class="second">
                <svg
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 66 43"
                  height="20px"
                  width="50px"
                >
                  <g
                    fill-rule="evenodd"
                    fill="none"
                    stroke-width="1"
                    stroke="none"
                    id="arrow"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      class="one"
                    ></path>
                    <path
                      fill="#FFFFFF"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      class="two"
                    ></path>
                    <path
                      fill="#FFFFFF"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      class="three"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>

          {/* <div className="stats">
            <div>
              <h2>4M+</h2>
              <p>Parts Produced</p>
            </div>
            <div>
              <h2>69</h2>
              <p>Machines In-House</p>
            </div>
            <div>
              <h2>10K+</h2>
              <p>Customers Served</p>
            </div>
          </div> */}
        </div>
        {/* cube */}
        {/* <div className="container">
          <div className="cube">
            <div style={{ "--x": -1, "--y": 0 }}>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span>
            </div>
            <div style={{ "--x": 0, "--y": 0 }}>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span>
            </div>
            <div style={{ "--x": 1, "--y": 0 }}>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span>
            </div>
          </div>

          <div className="cube">
            <div style={{ "--x": -1, "--y": 0 }}>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span>
            </div>
            <div style={{ "--x": 0, "--y": 0 }}>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span>
            </div>
            <div style={{ "--x": 1, "--y": 0 }}>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span>
            </div>
          </div>

          <div className="cube">
            <div style={{ "--x": -1, "--y": 0 }}>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span>
            </div>
            <div style={{ "--x": 0, "--y": 0 }}>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span>
            </div>
            <div style={{ "--x": 1, "--y": 0 }}>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span>
            </div>
          </div>
        </div>*/}
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="circle-container">
          <div className="center-image">
            <img
              src={centralImage}
              alt="Central Logo"
              className="central-logo"
            />
          </div>
          <div className="service-list">
            <div className="service-item">
              <Link to="/services/additive-manufacturing">
                <h3>Design for Additive Manufacturing</h3>
                <p>
                  Design of implants, prosthetic & Engineering parts through our
                  customer experience, innovation & incubation centre.
                </p>
              </Link>
            </div>
            <div className="service-item">
              <Link to="/services/metrology-inspection">
                <h3>Post Processing</h3>
                <p>
                  Surface finishing, coloring, and other post-processes to
                  enhance the final product.
                </p>
              </Link>
            </div>
            <div className="service-item">
              <Link to="/services">
                <h3>Manufacturing (3D Printing)</h3>
                <p>
                  Utilizing state-of-the-art 3D printing technologies to create
                  high-quality products.
                </p>
              </Link>
            </div>
            <div className="service-item">
              <Link to="/services">
                <h3>Data Optimization</h3>
                <p>
                  Ensuring that data is optimized for efficient processing and
                  analysis.
                </p>
              </Link>
            </div>
            <div className="service-item">
              <Link to="/services">
                <h3>Process Selection</h3>
                <p>
                  Helping you choose the best manufacturing process for your
                  specific needs.
                </p>
              </Link>
            </div>
            <div className="service-item">
              <Link to="/services">
                <h3>Material Selection</h3>
                <p>
                  Offering expert advice on selecting the right materials for
                  your projects.
                </p>
              </Link>
            </div>
            <div className="service-item">
              <Link to="/services">
                <h3>Topology Optimization</h3>
                <p>Optimizing the structural design to</p>
                <p>achieve the best performance and</p>
                <p>efficiency.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*mobile view*/}
      {/* Services Section */}
      <div className="services-section-mob">
        <h2>Our Services</h2>
        <div className="services-container-mob">
          <div className="service-item-mob">
            <img
              src={service1Image}
              alt="Service 1"
              className="service-image-mob"
            />
            <h3>Additive Manufacturing</h3>
            {/* <p>Description of Service 1.</p> */}
            <Link
              to="/services/additive-manufacturing"
              className="service-link-mob"
            >
              Learn More
            </Link>
          </div>
          <div className="service-item-mob">
            <img
              src={service2Image}
              alt="Service 2"
              className="service-image-mob"
            />
            <h3>Metrology Inspection</h3>
            {/* <p>Description of Service 2.</p> */}
            <Link
              to="/services/metrology-inspection"
              className="service-link-mob"
            >
              Learn More
            </Link>
          </div>
          <div className="service-item-mob">
            <img
              src={service3Image}
              alt="Service 3"
              className="service-image-mob"
            />
            <h3>Design Analysis</h3>
            {/* <p>Description of Service 3.</p> */}
            <Link to="/services" className="service-link-mob">
              Learn More
            </Link>
          </div>
          {/* <div className="service-item-mob">
            <img
              src={service3Image}
              alt="Service 3"
              className="service-image-mob"
            />
            <h3>Testing</h3>
            <p>Description of Service 3.</p>
            <Link to="/services/testing" className="service-link-mob">
              Learn More
            </Link>
          </div>
          <div className="service-item-mob">
            <img
              src={service3Image}
              alt="Service 3"
              className="service-image-mob"
            />
            <h3>Training</h3>
            <p>Description of Service 3.</p>
            <Link to="/services/training" className="service-link-mob">
              Learn More
            </Link>
          </div> */}
        </div>
      </div>

      {/* Who are we Section */}
      <div className="who-are-we-section">
        <h2>Who are we</h2>
        <div className="who-are-we-content">
          <div className="who-item">
            {/* <h3>Expert Team</h3> */}
            <p>
              Precision Engineering Technology Centre (PETC) is an integral part
              of the Precision Manufacturing Mega Cluster initiative, supported
              by the Tamil Nadu government and the Thirumudivakkam Industrial
              Estate Manufacturers Association (TIEMA). Our mission is to
              empower Micro, Small, and Medium Enterprises (MSMEs) by providing
              access to state-of-the-art research and development (R&D)
              facilities. We specialize in a comprehensive range of services,
              including 3D scanning, additive manufacturing, design analysis,
              and product testing. Our goal is to enhance innovation and
              competitiveness within the manufacturing sector, enabling
              businesses to thrive in a rapidly evolving landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us-section">
        <h2>Why PETC?</h2>
        <div className="why-choose-us-content">
          <div className="why-item">
            <img src={rd} alt="Why Choose Us" className="vector-image" />
            <h3>Comprehensive R&D Solutions</h3>
            {/* <p>
              PETC is your one-stop destination for all your research and
              development needs.
            </p> */}
          </div>
          <div className="why-item">
            <img src={msme} alt="Why Choose Us" className="vector-image" />
            <h3>Startup and MSME Focus</h3>
            {/* <p>
              We understand the unique challenges faced by startups and MSMEs
              and offer tailored solutions.
            </p> */}
          </div>
          <div className="why-item">
            <img src={expert} alt="Why Choose Us" className="vector-image" />

            <h3>Advanced Facilities and Expert Team</h3>
            {/* <p>
              Our state-of-the-art facilities and experienced team are dedicated
              to supporting your innovation journey. Tailored Solutions: We
              provide customized solutions to meet your specific requirements,
              ensuring you stay competitive.
            </p> */}
          </div>
          <div className="why-item">
            <img src={assurance} alt="Why Choose Us" className="vector-image" />

            <h3>Prototyping, Product Development, and Quality Assurance</h3>
            {/* <p>
              We offer comprehensive services from prototyping to product
              development and quality assurance.
            </p> */}
          </div>
        </div>
      </div>

      {/* How PETC works */}
      <div className="how-petc-works-section">
        <h2>How PETC Works</h2>
        <div className="how-petc-works-content">
          <div className="how-item">
            <img
              src={Seamless_Collaboration}
              alt="Why Choose Us"
              className="vector-image"
            />
            <h3>Seamless Collaboration</h3>
            {/* <p>
              PETC is your one-stop destination for all your research and
              development needs.
            </p> */}
          </div>
          <div className="how-item">
            <img
              src={Thorough_Assessment}
              alt="Why Choose Us"
              className="vector-image"
            />
            <h3>Thorough Assessment</h3>
            {/* <p>
              We understand the unique challenges faced by startups and MSMEs
              and offer tailored solutions.
            </p> */}
          </div>
          <div className="how-item">
            <img
              src={Advanced_Technologies}
              alt="Why Choose Us"
              className="vector-image"
            />

            <h3>Advanced Technologies</h3>
            {/* <p>
              Our state-of-the-art facilities and experienced team are dedicated
              to supporting your innovation journey. Tailored Solutions: We
              provide customized solutions to meet your specific requirements,
              ensuring you stay competitive.
            </p> */}
          </div>
          <div className="how-item">
            <img
              src={High_Quality_Results}
              alt="Why Choose Us"
              className="vector-image"
            />

            <h3>High-Quality Results</h3>
            {/* <p>
              We offer comprehensive services from prototyping to product
              development and quality assurance.
            </p> */}
          </div>
          <div className="how-item">
            <img
              src={Open_Communication}
              alt="Why Choose Us"
              className="vector-image"
            />

            <h3>Open Communication</h3>
            {/* <p>
              We offer comprehensive services from prototyping to product
              development and quality assurance.
            </p> */}
          </div>
          <div className="how-item">
            <img
              src={Feedback_Loop}
              alt="Why Choose Us"
              className="vector-image"
            />

            <h3>Feedback Loop</h3>
            {/* <p>
              We offer comprehensive services from prototyping to product
              development and quality assurance.
            </p> */}
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="photo-gallery-section">
        <h2>Photo Gallery</h2>
        <div className="photo-gallery-container" ref={galleryRef}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="photo-item"
              onClick={() => openImage(image)}
            >
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="photo-image"
              />
            </div>
          ))}
        </div>
        {/* Styled Arrow Buttons */}
        <button className="gallery-arrow left" onClick={scrollLeft}>
          <ArrowBackIos style={{ fontSize: "24px", color: "black" }} />
        </button>
        <button className="gallery-arrow right" onClick={scrollRight}>
          <ArrowForwardIos style={{ fontSize: "24px", color: "black" }} />
        </button>
      </div>

      {/* Expanded Image Modal */}
      {currentImage && (
        <div className="image-modal">
          {/* Close Button - Top Right Corner */}
          <button className="close-button" onClick={closeImage}>
            <Close />
          </button>

          {/* Previous Image Button - Left */}
          <button
            className="nav-button prev-button"
            onClick={goToPreviousImage}
          >
            <ArrowBackIos />
          </button>

          {/* Expanded Image */}
          <img
            src={currentImage.src}
            alt="Expanded"
            className="expanded-image"
          />

          {/* Next Image Button - Right */}
          <button className="nav-button next-button" onClick={goToNextImage}>
            <ArrowForwardIos />
          </button>
        </div>
      )}

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or need support? Reach out to us!</p>
        <button className="contact-button" onClick={openModal}>
          Get in Touch
        </button>
      </div>
      {/* Modal for Contact */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {!successMessage && (
          <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <p>
              Please fill out the form below and we will get back to you soon.
            </p>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </Modal>
      {/* Modal for Quote */}
      <Modal isOpen={isQuoteModalOpen} onClose={closeQuoteModal}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {!successMessage && (
          <form onSubmit={handleQuoteSubmit}>
            <h2>{modalTitle}</h2>
            <p>{modalDesc}</p>

            <label>
              Name:
              <input
                type="text"
                name="name"
                value={quoteData.name}
                onChange={handleQuoteInputChange}
                placeholder="Your Name"
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={quoteData.email}
                onChange={handleQuoteInputChange}
                placeholder="Your Email"
                required
              />
            </label>
            <label>
              Mobile No:
              <input
                type="tel"
                name="mobileno"
                value={quoteData.mobileno}
                onChange={handleQuoteInputChange}
                placeholder="+91"
                required
              />
            </label>
            <div className="service-inputs">
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  checked={selectedOption === "Additive Manufacturing"}
                  onChange={handleOptionChange}
                />
                <span className="name">Additive Manufacturing</span>
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  checked={selectedOption === "3D Printing"}
                  onChange={handleOptionChange}
                />
                <span className="name">3D Printing</span>
              </label>
            </div>

            {/* <label>
              Upload File:
              <input
                type="file"
                name="file"
                onChange={handleFileUpload}
                required
              />
            </label> */}

            <label>
              Message:
              <textarea
                name="message"
                value={quoteData.message}
                onChange={handleQuoteInputChange}
                placeholder="Your Message"
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default Home;
