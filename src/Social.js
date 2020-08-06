import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import './css/Social.css';

function Social() {
    return (
        <div>
            <a href="https://www.linkedin.com/in/roque-soto-castaneda/"
               className="linkedin social" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
            </a>
            <a href="https://github.com/Roqueasoto"
               className="github social" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} size="lg"/>
            </a>
            <a href="https://twitter.com/FledgelingGame"
               className="twitter social" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitterSquare} size="lg"/>
            </a>
        </div>
    );
}

export default Social;