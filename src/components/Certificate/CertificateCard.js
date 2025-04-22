import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
// import { CgWebsite } from "react-icons/cg";
import { BsLink } from "react-icons/bs";

function CertificateCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.certificateLink} target="_blank" rel="noopener noreferrer">
          <CgWebsite /> &nbsp; Certificate Link
        </Button>
        {"\n"}
        {"\n"}

        
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
