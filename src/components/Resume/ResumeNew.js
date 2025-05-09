import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Generalpdf from "../../Assets/../Assets/generalCV.pdf";
import SpecialisedCV from "../../Assets/../Assets/SpecialisedCV.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import {  pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  // const [width, setWidth] = useState(1200);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <section id="resume">


    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
       
        </Row>

        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={Generalpdf}
            target="_blank"
            style={{ maxWidth: "250px",marginRight:'40px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download General CV
          </Button>
          <Button
            variant="primary"
            href={SpecialisedCV}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Specialised CV
          </Button>
        
        </Row>
      </Container>
    </div>
    </section>
  );
}

export default ResumeNew;
