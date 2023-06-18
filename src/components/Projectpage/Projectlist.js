import React from 'react'
import ProjectCard from "./projectcard";
import { Col, Container, Row } from 'react-bootstrap';
import acma from '../../assets/Images/acma.jpg'
import Lincoln from '../../assets/Images/Lincoln.jpg'
import Genesis from '../../assets/Images/genesis.jpg'
import Dap from '../../assets/Images/dial-a-physio.jpg'
import Das from '../../assets/Images/DAS.jpg'
import wbs from '../../assets/Images/wbs.jpg'

const Projectlist = () => {
  return (
    <div className="home-page">
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acma}
              isBlog={false}
              title="Acma"
              description="The Automotive Component Manufacturers Association of India (ACMA) is the apex body representing the interest of the Indian Auto Component Industry. Its membership of over 800 manufacturers contributes to more than 85 % of the auto component industry’s turnover in the organized sector."
              ghLink="https://www.acma.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lincoln}
              isBlog={false}
              title="Lincoln University"
              description="Lincoln University of Business and Management is a private institution based in Sharjah, United Arab Emirates, with campuses in Sharjah and Fujairah. LUBM offers management programs in bachelor, master and diploma levels in association with international institutions."
              ghLink="https://lincoln-edu.ae/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Genesis}
              isBlog={false}
              title="Genesis"
              description="Genesis Finance Company Limited is a leading Indian Financial Institution specializing in providing debt financing to MSMEs and consumers in India. In August 2018."
              ghLink="https://genesisfinance.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dap}
              isBlog={false}
              title="Dial-a-Physio"
              description="Dial-A-Physio is a In Home and Clinic based Physiotherapy and rehabilitation facility. We provide a wide array of Physiotherapy services, at our Bolton , as well as in the comfort of your home."
              ghLink="https://dialaphysio.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Das}
              isBlog={false}
              title="Dehumidifiedairservices"
              description="As the manufacturer-direct OEM service provider of the factory that built your Dectron, PoolPak, and Seresco dehumidifier, nobody knows your dehumidifier like we do – because we’re the experts."
              ghLink="https://dehumidifiedairservices.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wbs}
              isBlog={false}
              title="Webeesocial Canada"
              description=" We are WeBeeSocial, a creative digital marketing agency based out of Toronto that thrives on creating marketing campaigns that are not only digitally rich,but also creatively appealing."
              ghLink="https://webeesocial.ca/"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
  )
}

export default Projectlist