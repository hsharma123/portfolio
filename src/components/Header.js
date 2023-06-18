import { React ,useState} from 'react'
import { Button,Navbar,Container, Nav } from "react-bootstrap";
import {Link,  NavLink } from "react-router-dom";



const Header = () => {
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <div className='navbar-header'>
      <Navbar bg="light" collapseOnSelect expand="md"  fixed='top' className={navColour ? "sticky" : "navbar"}>
    <Container>
      <Navbar.Brand href="#home"className="logotext" as={Link} to="/">
         <div className="logo"></div>
      </Navbar.Brand>
      <Button 
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1-yamaNkmPKrk1jNxWo_JFJ8t_l5cnFK7/view"
              );
              
            }}
            className="resumebtn show-btn"
          >
            <span>Resume</span>
          </Button>
      <Navbar.Toggle className='navbar-toggler'
        aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
        <Nav className="ms-auto">
        <Nav.Item>
            <NavLink
              className="nav-link"
                to="/"
         
             
            >
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
                to="/about"
         
             
            >
              About
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className="nav-link"
                to="/project"
         
             
            >
              Projects
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className="nav-link"
                to="/contact"
         
             
            >
              Contact
            </NavLink>
          </Nav.Item>

          <Button 
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1-yamaNkmPKrk1jNxWo_JFJ8t_l5cnFK7/view"
              );
              
            }}
            className="resumebtn hide-btn"
          >
            <span>Resume</span>
          </Button>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    </div>
  )
}

export default Header