import React from 'react';
import ProjectCard from './projectcard';
import projectData from './ProjectData'; // Make sure to import your project data array
import { Col, Container, Row } from 'react-bootstrap';

const Projectlist = () => {
  return (
    <div className="home-page">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projectData.map((project, index) => (
              <Col md={4} key={index} className="project-card">
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Projectlist;
