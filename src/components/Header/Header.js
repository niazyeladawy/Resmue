import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import { useContext } from 'react';
import { ResumeDataContext } from '../../context/resumeContext';


function Header() {
    const { data } = useContext(ResumeDataContext);

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
                        {data && Object.keys(data.socials).map(
                            (key,idx) =>(
                                <a  key={idx} href={data.socials[key].link} target="blank"><i className={data.socials[key].icon}></i> </a>
                            )
                        )}
                        <a href="https://drive.google.com/file/d/19Y0Mu1Djyhb9yKBBIh_CapxLM3c3JL4M/view?usp=sharing" target="blank"  className="fs-6 btn bg-main w-100 d-flex justify-content-between align-items-center">Download CV <i className="fas fa-download"></i></a>
                        
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
