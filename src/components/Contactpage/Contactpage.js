import React from 'react'
import { Container } from 'react-bootstrap';

const Contactpage = () => {
  return (
    <div className="about-page home-page">
        <Container>
        <h2 className="contact-head">Get In Touch</h2>
        <p className="contact-para">
        I’m currently  working in Webeesocial and also searching for  best opportunities  a front-end developer role. and i also working as freelancer. If there is any vacancy my inbox is always open. Whether you have any further questions or just want to say hi, I’ll try my best to get back to you!
        </p>
        <button
            className="contact-btn"
            onClick={() => {
            window.open("https://linkedin.com/in/himanshu-sharma-3281b9191");
            }}
        >
            Say Hello
        </button>
        <span></span>
        <p className="copyright">
            © Copyright 2023
            <hr />
            Designed & Built by <span>Himanshu Sharma</span>
        </p>
        </Container>
  </div>
  )
}

export default Contactpage