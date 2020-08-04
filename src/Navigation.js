import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Form, FormControl, Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Projects from './Projects.js';
import Resume from './Resume.js';
import About from './About.js';

export class Navigation extends React.Component {

    constructor(props){
        super(props);
        this.state = { isShown: false };
    }

    handleShow = () => {
        this.setState({isShown: true});
    }

    handleHide = () => {
        this.setState({isShown: false});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/home">Roque Soto Castaneda</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/home">About</Nav.Link>
                                <Nav.Link href="/resume">Resume</Nav.Link>
                                <NavDropdown title="Portfolio" id="basic-nav-dropdown"
                                             onMouseEnter={this.handleShow}
                                             onMouseLeave={this.handleHide}
                                             show={this.state.isShown}
                                >
                                    <NavDropdown.Item href="/projects">All Projects</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#Project1">Project 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#Project2">Project 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#Project3">Project 3</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    {/* Router */}
                    <Route path="/projects" component={Projects}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/home" component={About}/>
                </div>
            </BrowserRouter>
        );
    }
}