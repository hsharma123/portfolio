import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Aboutpage = () => {
  return (
    <>
      <section className="about-page home-page">
        <Container>
          <Row className="about-me">
            <Col md={7}>
              <h3 className="about-me-text">
                About <span>Me</span>
              </h3>
              <p className="about-me-detail">
                I'm a Front-End Developer from India, passionate about building responsive and accessible websites that provide a great user experience for everyone. I enjoy problem-solving and take pride in writing clean, maintainable code. I'm also curious about developing scalable distribution systems and continuously learning new technologies. Currently, I'm working on OTT and TV applications for platforms like LG and Samsung.
              </p>

              <h3 className="about-me-text">Skills</h3>
              <Row className="about-skill">
                <Col md={6} xs={6}>
                  <ul className="skill-list">
                    {[
                      'HTML5/CSS3',
                      'JavaScript',
                      'jQuery',
                      'Bootstrap',
                      'Material UI / Tailwind / Shadcn UI',
                      'WordPress',
                      'Shopify',
                    ].map((skill, i) => (
                      <li key={i}>
                        <div className="skill-box">
                          <span></span>
                          <h6>{skill}</h6>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col md={6} xs={6}>
                  <ul className="skill-list">
                    {[
                      'React JS',
                      'Redux JS',
                      'React Bootstrap',
                      'SCSS',
                      'Git / GitHub',
                      'API Integration',
                      'Next.js',
                    ].map((skill, i) => (
                      <li key={i}>
                        <div className="skill-box">
                          <span></span>
                          <h6>{skill}</h6>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col md={5}>
            <div className="webimage" aria-hidden="true"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Aboutpage;
