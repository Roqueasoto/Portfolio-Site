import React from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import tabletgraphic from "../img/SidewaysTabletTrim2.svg";
import '../css/Home.css';

function AboutMe() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center pt-5 pb-5">
                        <h1></h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Image className="graphic-container" src={tabletgraphic} />
                    </Col>
                </Row>
            </Container>
            <Jumbotron fluid className="jumbo">
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
            </Jumbotron>
        </div>
    );
}

export default AboutMe;