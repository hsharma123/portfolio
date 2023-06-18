import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Text from './Text'
import {AiFillGithub,AiOutlineTwitter} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom";


const Homepage = () => {
  return (
    <div className='home-page'>
        <Container>
                <Row>
                    <Col md="7">
                            <h2 className='home-page-text'>Hello <span className='wave'>👋 </span></h2>
                            <h2 className='home-page-name'>I'm Himanshu Sharma</h2>
                            <span></span>
                            <Text />
                            <button className='social-btn'>
                             <Link to ="mailto:bhs985576@gmail.com"><MdEmail className='icon' /></Link>
                            </button>
                            <button onClick={() => {
                                window.open("https://github.com/hsharma123");
                                }}
                                className='social-btn'><AiFillGithub className='icon' /></button>
                                <button onClick={() => {
                                window.open("https://linkedin.com/in/himanshu-sharma-3281b9191");
                                }}
                                className='social-btn'><FaLinkedinIn className='icon' /></button>
                                <button onClick={() => {
                                window.open("https://twitter.com/Himansh35588752");
                                }}
                                className='social-btn'><AiOutlineTwitter className='icon' /></button>
                               
                    </Col>
                    <Col md="5">
                        <div className="developer-image"/>
                    </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Homepage