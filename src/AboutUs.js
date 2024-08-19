import React from "react";
import cover from "./assets/cover.jpg";

const AboutUs = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#034e7b" }}>
      {/* Fixed Cover Image */}
      <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "70vh",
          width: "100%",
          position: "relative",
        }}
      >
        <header
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "10px", color: "#fff" }}>
            Innovating the Future of Manufacturing through PETC
          </h1>
        </header>
      </div>

      {/* Content Section */}
      <section
        style={{
          backgroundColor: "white",
          padding: "50px 20px",
          lineHeight: "1.6",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "left",
            color: "#034e7b",
          }}
        >
          <h1
            style={{ fontSize: "3rem", marginTop: "0", marginBottom: "10px" }}
          >
            ABOUT US
          </h1>
          <p>
            At Precision Engineering Technology Centre (PETC), we are dedicated
            to empowering Micro, Small, and Medium Enterprises (MSMEs) by
            providing unparalleled access to advanced research and development
            facilities. Our mission is to foster innovation and growth within
            the MSME sector by offering a comprehensive suite of services that
            enhance capabilities and drive evolution in manufacturing processes.
          </p>
          <p>
            PETC serves as a one-stop solution for all your engineering needs.
            We specialize in a wide range of services, including:
          </p>
          <span
            style={{
              display: "inline-block",
              padding: "5px 10px",
              backgroundColor: "#034e7b",
              color: "white",
              borderRadius: "15px",
            }}
          >
            Industrial-Grade 3D Printing
          </span>
          <p>
            Our advanced 3D printing capabilities utilize both polymer and metal
            technologies, including Selective Laser Sintering (SLS) and Direct
            Metal Laser Sintering (DMLS). With industrial-grade machines, we can
            produce components in any quantity, whether for prototypes or
            high-volume production runs, ensuring quality and consistency at
            every stage.
          </p>
          <span
            style={{
              display: "inline-block",
              padding: "5px 10px",
              backgroundColor: "#034e7b",
              color: "white",
              borderRadius: "15px",
            }}
          >
            3D Scanning
          </span>
          <p>
            Our state-of-the-art 3D scanning technology enables precise
            measurement and inspection, ensuring quality and accuracy in every
            project.
          </p>
          <span
            style={{
              display: "inline-block",
              padding: "5px 10px",
              backgroundColor: "#034e7b",
              color: "white",
              borderRadius: "15px",
            }}
          >
            Design and Analysis
          </span>
          <p>
            We leverage Dassault Systems' 3D Experience platform to provide
            end-to-end design and analysis services. Our collaboration with
            TANCAM allows us to transform concepts into reality with precision
            and efficiency.
          </p>
          <span
            style={{
              display: "inline-block",
              padding: "5px 10px",
              backgroundColor: "#034e7b",
              color: "white",
              borderRadius: "15px",
            }}
          >
            Testing Facilities
          </span>
          <p>
            Our comprehensive testing facilities, equipped with cutting-edge
            technology, ensure that your products meet the highest quality
            standards. We are committed to establishing a full-scale testing lab
            aimed at achieving NABL accreditation, further enhancing our service
            offerings.
          </p>
          <span
            style={{
              display: "inline-block",
              padding: "5px 10px",
              backgroundColor: "#034e7b",
              color: "white",
              borderRadius: "15px",
            }}
          >
            Training and Education
          </span>
          <p>
            Through our state-of-the-art facilities, we offer training modules
            covering all aspects of our services. These industry-relevant
            courses are designed for both professionals and academia, equipping
            participants with the knowledge and skills needed to excel in the
            manufacturing sector.
          </p>
          <p>
            At PETC, we believe that collaboration is key to success. Our team
            of experts is passionate about working closely with our clients to
            understand their specific needs and provide tailored solutions that
            drive innovation and efficiency. We are committed to being a trusted
            partner in your journey towards growth and excellence.
          </p>
          <p>
            Join us at PETC, where we turn ideas into reality, impart knowledge,
            and help your business evolve in an ever-changing landscape.
            Together, we can shape the future of manufacturing.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
