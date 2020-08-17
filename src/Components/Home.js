import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import tabletgraphic from "../img/UprightPhoneTrimDark.svg";
import downArrow from "../img/DownArrow.svg";
import PortfolioCards from "./PortfolioCards";
import '../css/Home.css';

function Home(props) {
    return (
        <div>
            <Container fluid className="splash-page pt-md-5">
                <Row>
                    <Col className="no-r-padding">
                        <Container className="no-padding">
                            <Row>
                                <Col className="no-r-padding">
                                    <h1 className="splash-title">
                                        Software Engineer With <br/>
                                        A<mark>Creative Edge</mark>
                                    </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="no-r-padding">
                                    <h2 className="splash-title">
                                        I develop applications both on <br/>
                                        and off the web that are easy to <br/>
                                        maintain and a pleasure to use.
                                    </h2>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="graphic-container">
                        <div className="image">
                            <Image className="graphic-container" src={tabletgraphic}/>
                            <Link to="#" onClick={props.handleScroll} className="center-icon">
                                <Image className="center-icon" src={downArrow}/>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Jumbotron fluid className="jumbo" ref={props.portfolioRef}>
                <h1 className="d-flex justify-content-center">
                    Hi there! I'm Roque, nice to meet you.
                </h1>
                <h2 className="d-flex justify-content-center">
                    I’m a software engineer based in Pittsburgh, PA. My development
                    experiences <br/> range from web development across the full
                    stack to client-facing consulting. <br/> My passion for user-centered
                    design and clean, stylish aesthetics is what <br/> elevates my
                    projects to the next level.
                </h2>
                <h1 className="d-flex justify-content-center">
                    Here is my portfolio.
                </h1>
            </Jumbotron>
            <PortfolioCards/>
        </div>
    );
}

export default Home;
