import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <section style={{ backgroundColor: "#0d1117", color: "#c9d1d9", padding: "40px 0" }} id="contact">
      <Container>
        <Row>
            
          {/* Contact Information */}
          <h1 className="project-heading" style={{marginTop:"80px"}}>
           <strong className="purple">Connect With Me </strong>
        </h1>
        <h5>I'm always enthusiastic about exploring innovative projects, brainstorming creative ideas, and collaborating to bring unique visions to life.</h5>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        

          <Col md={6} style={{ marginBottom: "20px" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Contact Information</h2>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <HiOutlineMail style={{ fontSize: "1.5em", marginRight: "10px", color: "#58a6ff" }} />
                <span>princemali019@gmail.com</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <HiOutlinePhone style={{ fontSize: "1.5em", marginRight: "10px", color: "#58a6ff" }} />
                <span>+91 6350387180</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <HiOutlineLocationMarker style={{ fontSize: "1.5em", marginRight: "10px", color: "#58a6ff" }} />
                <span>Rajasthan</span>
              </li>
            </ul>
            <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>Connect with me</h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <a href="https://github.com/prince-mali2" target="_blank" rel="noreferrer" style={iconStyle}>
                <AiFillGithub />
              </a>
              <a href="https://linkedin.com/in/prince-mali/" target="_blank" rel="noreferrer" style={iconStyle}>
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com/prince._mali" target="_blank" rel="noreferrer" style={iconStyle}>
                <AiFillInstagram />
              </a>
            </div>
          </Col>

          {/* Contact Form */}
          <Col md={6}>
            <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Send Me a Message</h2>
            <Form>
              <Form.Group controlId="formName" style={{ marginBottom: "15px" }}>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  style={inputStyle}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" style={{ marginBottom: "15px" }}>
                <Form.Control
                  type="email"
                  placeholder="your.email@example.com"
                  style={inputStyle}
                />
              </Form.Group>
              <Form.Group controlId="formSubject" style={{ marginBottom: "15px" }}>
                <Form.Control
                  type="text"
                  placeholder="What is this regarding?"
                  style={inputStyle}
                />
              </Form.Group>
              <Form.Group controlId="formMessage" style={{ marginBottom: "20px" }}>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your message here..."
                  style={inputStyle}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#58a6ff",
                  borderColor: "#58a6ff",
                  width: "100%",
                  padding: "10px",
                }}
              >
                <span style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "20px", height: "20px" }}
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Send Message
                </span>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const iconStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "50%",
  color: "#58a6ff",
  fontSize: "1.5em",
  transition: "all 0.3s",
};

const inputStyle = {
  backgroundColor: "#161b22",
  borderColor: "#30363d",
  color: "#c9d1d9",
  padding: "10px",
};

export default Contact;
