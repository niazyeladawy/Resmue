import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import resumeData from '../../utils/resumeData';
import Pdf from '../../utils/CV.pdf';

function Header() {
    return (
        <Navbar bg="white" expand="lg" className="shadow rounded-3">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <NavLink className="mx-2" to="/" ><HomeIcon/></NavLink>
                        <NavLink className="mx-2" to="/resume" activeClassName="activ"> Resume</NavLink>
                        <NavLink className="mx-2" to="/portfolio" activeClassName="activ">Portfolio</NavLink>
                    </Nav>
                    <div className="header-right d-flex align-items-center">
                        {Object.keys(resumeData.socials).map(
                            (key,idx) =>(
                                <a  key={idx} href={resumeData.socials[key].link} target="blank"><i className={resumeData.socials[key].icon}></i> </a>
                            )
                        )}
                        <a href={Pdf} target = "blank" download className="fs-6 btn bg-main w-100 d-flex justify-content-between align-items-center">Download CV <i className="fas fa-download"></i></a>
                        
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
