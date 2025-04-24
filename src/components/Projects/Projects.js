import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Insect from "../../Assets/Projects/Insect.png";
import Filmpire from "../../Assets/Projects/Filmpire.png";
import Food from "../../Assets/Projects/Food.png";
import Goldgym from "../../Assets/Projects/Goldgym.png";
import Blogly1 from "../../Assets/Projects/Blogly1.png";


function Projects() {
  return (
    <section id="projects">

    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Filmpire}
              isBlog={false}
              title="Filmpire"
              description="Filmpire is a modern movie streaming website built using React.js and MUI (Material-UI). It provides users with an intuitive and visually appealing interface to explore, search, and stream movies. The project integrates advanced features to deliver a seamless user experience."
              ghLink="https://github.com/prince-mali2/Filmpire"
              demoLink="https://filmpirejsm.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Goldgym}
              isBlog={false}
              title="Goldsgym"
              description="Gold's Gym is a modern fitness website built with React, leveraging APIs from RapidAPI like ExerciseDB and YouTube Search. The platform offers users a comprehensive library of exercises, detailed instructions, and curated video tutorials to enhance their fitness journey. Designed for ease of use and visual appeal, it provides personalized fitness solutions and integrates seamlessly with contemporary fitness trends."
              ghLink="https://github.com/prince-mali2/Goldsgym"
              demoLink="https://goldss-gymm.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blogly1}
              isBlog={false}
              title="Blogly"
              description="A PHP-based blog website features an intuitive admin panel, allowing users to easily create, edit, and manage blog posts. Built with PHP and MySQL for the backend, and HTML, CSS, and JavaScript for the frontend, it offers a dynamic, user-friendly experience. The system supports content categorization, user management, and secure login, providing a streamlined solution for both bloggers and readers. The website is designed for scalability and easy customization, ensuring a smooth, responsive interface."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Insect}
              isBlog={false}
              title="Catch The Insect"
              description="Catch The Insect is an interactive and fun web game built using HTML, CSS, and JavaScript. The game begins with a choice screen where players select their favorite insect (Fly, Mosquito, Spider, or Roach) to start the game. Once the insect is selected, the gameplay begins, and players are tasked with catching the chosen insect within a limited time frame. "
              ghLink="https://github.com/prince-mali2/Mini_projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food}
              isBlog={false}
              title="Food Website"
              description="Food Website
This food website is a visually appealing and user-friendly platform designed with HTML and CSS, offering a wide variety of food-related content. The website features an organized layout showcasing recipes, meal suggestions, and food categories. With a clean and responsive design, it ensures a seamless experience across devices. "
              ghLink="https://github.com/prince-mali2/BookStore-website"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Projects;
