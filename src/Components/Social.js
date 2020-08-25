import React from 'react';
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import '../css/Social.css';
import {Link} from "react-router-dom";
import Resume from '../resume_Roque.pdf';


function Social(props) {
    return (
        <Jumbotron fluid className="social-jumbo jumbo">
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <p className="social">Get in touch at <mark>roquealbertosoto@gmail.com</mark></p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Link className="footer-link" to="/home" onClick={props.handleScroll}>Home</Link>
                        <a className="footer-link" href={Resume} target='_blank' rel="noopener noreferrer">Resume</a>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/roque-soto-castaneda/"
                           className="linkedin social" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        </a>
                        <a href="https://github.com/Roqueasoto"
                           className="github social" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                        </a>
                        <a href="https://twitter.com/FledgelingGame"
                           className="twitter social" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Social;