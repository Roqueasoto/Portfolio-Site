import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar} from "react-bootstrap";
import '../css/Nav.css';
import Resume from '../resume_Roque.pdf';

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

    render() {
        return (
            <Navbar variant="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/home">Roque Soto Castaneda</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link href={Resume} target='_blank' rel="noopener noreferrer">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}