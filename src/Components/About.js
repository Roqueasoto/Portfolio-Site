import React from "react";
import { Image } from "react-bootstrap";
import tabletgraphic from "../img/SidewaysTablet.svg";

function About() {
    return (
        <div>
            <h1>About</h1>
            <Image src={tabletgraphic} fluid />
        </div>
    );
}

export default About;