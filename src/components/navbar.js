import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Navbar as B4Navbar, Nav } from 'react-bootstrap'
import ConnectButton from "./connect";
import SocialGroup from "./social-group";

const NavBar = () => {    
    return (
        <B4Navbar collapseOnSelect expand="xl" className="land-nav navbar-default" variant="dark">
            <div className="navbar-header">
                <B4Navbar.Brand href="#">
                    <StaticImage quality={100} src="../assets/images/logo.png" placeholder="blurred" alt="DragoniaLand" />
                </B4Navbar.Brand>
                
                <div className="d-flex">
                    <B4Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content-end" >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </B4Navbar.Toggle>
                </div>
            </div>

            <B4Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav navbar-nav" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="#products">Marketplace</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#buynow">Battle Arena</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#solarbag">Dragonia Paper</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#contact">Roadmap</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="d-xl-none nav-link">
                        <ConnectButton />
                    </Nav.Item>
                </Nav>
            </B4Navbar.Collapse>

            <div className="d-none d-xxl-block">
                <SocialGroup />
            </div>
            <div className="ms-2 d-none d-xl-block">
                <ConnectButton />
            </div>
        </B4Navbar>
    );
  };
  
  export default NavBar;
  