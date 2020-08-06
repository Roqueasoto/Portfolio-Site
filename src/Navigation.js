import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './css/Nav.css';
import Social from "./Social";

export class Navigation extends React.Component {

    constructor(props){
        super(props);
        this.state = { isShown: false, isClicked: false };
    };

    handleShow = () => {
        this.setState({isShown: true});
    };

    handleHide = () => {
        if (!this.state.isClicked) {
            this.setState({isShown: false});
        }
    };

    handleClick = () => {
        this.setState({isClicked: !this.state.isClicked});
    }

    render() {
        return (
            <Navbar variant="light" expand="lg" sticky="top">
                <Container fluid>
                    <Row className="row-nav">
                        <Col className="burger-menu" xs={{  span: 12, order: 3 }} md={{ order: 1 }}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                                    <NavDropdown title="Portfolio" id="basic-nav-dropdown"
                                                 onMouseEnter={this.handleShow}
                                                 onMouseLeave={this.handleHide}
                                                 show={this.state.isShown}
                                                 onClick={this.handleClick}
                                    >
                                        <NavDropdown.Item as={Link} to="/projects">All Projects</NavDropdown.Item>
                                        <NavDropdown.Divider className="color-nav" />
                                        <NavDropdown.Item href="#Project1">Project 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#Project2">Project 2</NavDropdown.Item>
                                        <NavDropdown.Item href="#Project3">Project 3</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                        <Col className="d-flex justify-content-center" md={{ order: 1 }} lg={{ order: 2 }}>
                            <Navbar.Brand as={Link} to="/home">Roque Soto Castaneda</Navbar.Brand>
                        </Col>
                        <Col className="d-flex social-bar" xs={{ span: 12, order: 2 }}
                             md={{ order: 3 }}>
                            <Social/>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        );
    }
}