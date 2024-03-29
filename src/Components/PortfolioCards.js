import React from 'react';
import {CardDeck, Card, Container, Row, Col} from "react-bootstrap";
import PortfolioSite from "../img/PortfolioSite.svg";
import PMIS from "../img/PMIS.svg";
import CCVisualizer from "../img/ClimateChangeVisualizer.svg";
import Ocamon from "../img/Ocamon.svg";
import Scanner from "../img/PhotoScanner.svg";
import Pie from "../img/MarisaPie.svg"
import '../css/PortfolioCards.css';


function PortfolioCards() {
    return (
        <Container fluid>
            <Row>
                <Col className="card-row d-flex justify-content-center">
                    <CardDeck>
                        <Card>
                            <div className="card-img-wrap">
                                <Card.Img variant="top card-img-under" src={Pie} alt="Blueberry Apple Pie"/>
                                <p className="card-img-over">Taste That!</p>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Built a React/Node.js web-app with a team using open-source data
                                    on a AWS db with user login & favorites.
                                </Card.Text>
                                <Row>
                                    <Col className="no-r-padding">
                                        <Card.Title>Tools -</Card.Title>
                                        <ul className="card-list">
                                            <li>Node.js</li>
                                            <li>React</li>
                                            <li>Express.js</li>
                                            <li>AWS</li>
                                            <li>Material Design</li>
                                        </ul>
                                    </Col>
                                    <Col className="no-r-padding">
                                        <Card.Title>Skills -</Card.Title>
                                        <ul className="card-list">
                                            <li>Javascript</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>SQL</li>
                                            <li>CRUD APIs</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <div className="card-img-wrap">
                                <Card.Img variant="top card-img-under" src={PortfolioSite} alt="Image of this website"/>
                                <p className="card-img-over">This Website!</p>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Created a React-based portfolio website, including the art.
                                </Card.Text>
                                <Row>
                                    <Col className="no-r-padding">
                                        <Card.Title>Tools -</Card.Title>
                                        <ul className="card-list">
                                            <li>React</li>
                                            <li>Bootstrap</li>
                                            <li>Adobe XD</li>
                                        </ul>
                                    </Col>
                                    <Col className="no-r-padding">
                                        <Card.Title>Skills -</Card.Title>
                                        <ul className="card-list">
                                            <li>Javascript</li>
                                            <li>SCSS</li>
                                            <li>Design</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <div className="card-img-wrap">
                                <Card.Img variant="top card-img-under" src={PMIS}
                                          alt="Project Management sys. dashboard"
                                />
                                <p className="card-img-over">Portfolio Insights</p>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Worked on a project management info. system
                                    as a software engineer.
                                </Card.Text>
                                <Row>
                                    <Col className="no-r-padding">
                                        <Card.Title>Tools -</Card.Title>
                                        <ul className="card-list">
                                            <li>Angular</li>
                                            <li>Power BI</li>
                                            <li>SQL Server</li>
                                            <li>Bootstrap</li>
                                            <li>JQuery</li>
                                            <li>Git</li>
                                        </ul>
                                    </Col>
                                    <Col className="no-r-padding">
                                        <Card.Title>Skills -</Card.Title>
                                        <ul className="card-list">
                                            <li>Javascript</li>
                                            <li>CSS</li>
                                            <li>SQL</li>
                                            <li>Coldfusion</li>
                                            <li>Agile</li>
                                            <li>CRUD APIs</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
            <Row>
                <Col className="card-row d-flex justify-content-center">
                    <CardDeck>
                        <Card>
                            <div className="card-img-wrap">
                                <Card.Img variant="top card-img-under" src={CCVisualizer} alt="Earth from space"/>
                                <p className="card-img-over">Climate Change <br/> Visualizer</p>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Led a team building a web-app to educate users about
                                    climate change.
                                </Card.Text>
                                <Row>
                                    <Col className="no-r-padding">
                                        <Card.Title>Tools -</Card.Title>
                                        <ul className="card-list">
                                            <li>Gradle</li>
                                            <li>Spring Boot</li>
                                            <li>Bootstrap</li>
                                            <li>Thymeleaf</li>
                                            <li>OpenStreetMap</li>
                                            <li>Git</li>
                                        </ul>
                                    </Col>
                                    <Col className="no-r-padding">
                                        <Card.Title>Skills -</Card.Title>
                                        <ul className="card-list">
                                            <li>Java</li>
                                            <li>HTML</li>
                                            <li>Javascript</li>
                                            <li>CSS</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <div className="card-img-wrap">
                                <Card.Img variant="top card-img-under" src={Ocamon} alt="Gameboy Color"/>
                                <p className="card-img-over">Ocamon!</p>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Developed the enemy AI for a battle-only version of
                                    Pokemon Red/Blue.
                                </Card.Text>
                                <Row>
                                    <Col className="no-r-padding">
                                        <Card.Title>Tools -</Card.Title>
                                        <ul className="card-list">
                                            <li>Virtual Box</li>
                                            <li>Linux CLI</li>
                                            <li>Git</li>
                                        </ul>
                                    </Col>
                                    <Col className="no-r-padding">
                                        <Card.Title>Skills -</Card.Title>
                                        <ul className="card-list">
                                            <li>OCaml</li>
                                            <li>Model-View-Controller Design</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <div className="card-img-wrap">
                                <Card.Img variant="top card-img-under" src={Scanner}
                                          alt="Person taking picture of document"
                                />
                                <p className="card-img-over">Photo to Document <br/> Converter</p>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    Developed a CLI program that converts an image of a document
                                    into a top-down transformed pdf of it.
                                </Card.Text>
                                <Row>
                                    <Col className="no-r-padding">
                                        <Card.Title>Tools -</Card.Title>
                                        <ul className="card-list">
                                            <li>OpenCV Library</li>
                                        </ul>
                                    </Col>
                                    <Col className="no-r-padding">
                                        <Card.Title>Skills -</Card.Title>
                                        <ul className="card-list">
                                            <li>Python</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    );
}

export default PortfolioCards;