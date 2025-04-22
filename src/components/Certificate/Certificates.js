import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Codingspoon from "../../Assets/certificates/Codingspoon.png";
import CloudComputing from "../../Assets/certificates/CloudComputing.png";
import Webathon from "../../Assets/certificates/Webathon.png";
import Prompt from "../../Assets/certificates/Prompt.png";
import Buildai from "../../Assets/certificates/Buildai.png";

import backend2 from "../../Assets/certificates/backend2.png";






// import CodingspoonC from "../../Assets/certificates/Codingspoon.png";

import pdf from "../../Assets/../Assets/prince_cv2.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

function Certificates() {
  return (<Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
      My <strong className="purple">Certificates</strong>
      </h1>
      <p style={{ color: "white" }}>
      Here are some of the certifications I have earned recently.    
      </p>


      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={Codingspoon}
            isBlog={false}
            title="Data Structures and Algorithm - Coding Spoon "
            certificateLink='/certificates/CodingSpoon.pdf'
          />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={CloudComputing}
            isBlog={false}
            title="Cloud Computing - NPTEL "
            certificateLink='/certificates/Cloud Computing.pdf'
          />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={Webathon}
            isBlog={false}
            title="Web-a-Thon - 24hr Hackathon "
            certificateLink='/certificates/Webathon.pdf'
          />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={Prompt}
            isBlog={false}
            title="Prompt Engineering for ChatGPT - Coursera "
            certificateLink='/certificates/Prompt Engeneering.pdf'
          />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={Buildai}
            isBlog={false}
            title="Build AI Apps with ChatGPT, Dall-E, and GPT-4 - Coursera"
            certificateLink='/certificates/Buildai.pdf'
          />
        </Col>
        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={backend2}
            isBlog={false}
            title="Server side JavaScript with Node.js - Coursera"
            certificateLink='/certificates/backend2.pdf'
          />
        </Col>
        

      </Row>
    </Container>
  </Container>
  );
}

export default Certificates;
