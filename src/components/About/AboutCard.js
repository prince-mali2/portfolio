import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prince Mali </span>
            from <span className="purple"> Udaipur, Rajasthan, India.</span>
            <br />
            I am a 3rd-year BTech Computer Science Engineering student at Lovely Professional University.
            <br />
            I specialize in full-stack development and enjoy building web applications that solve real-world problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Suspense Thriller Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
