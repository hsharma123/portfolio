import React from 'react'
import { Col,Container,Row } from 'react-bootstrap'

const Aboutpage = () => {
  return (
    <div>
       <div className='about-page home-page'>
            <Container>
                <Row className='about-me'>
                    <Col md={7} >
                        <h3 className='about-me-text'>About <span>Me</span></h3>
                        <p className='about-me-detail'>I'm a Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skill-list'>
                            <Row className='about-skill'>
                                <h3 className='about-me-text'>Skills</h3>
                                <Col md={6} xs= {6}> 
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>HTML5/CSS3</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>Javascript</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>Jquery</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>Bootstrap</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>WordPress</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>Shopify</h6>
                                        </div>
                                    </li>
                                </Col>
                                <Col md={6} xs= {6}>
                                <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>React Js</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>Redux Js</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>React Bootstrap</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>SCSS</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>Git/ Github</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="skill-box">
                                            <span></span>
                                            <h6>Api Integration</h6>
                                        </div>
                                    </li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
       </div>
    </div>
  )
}

export default Aboutpage