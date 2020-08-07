import React from "react";
import Thumbnail from './Thumbnail.js';
import '../css/App.css';

function Projects(props) {
    return (
        <div>
            <h1>Projects</h1>
            <Thumbnail
                link="/twitter"
                image="http://twitter-image-url.jpg"
                title="Twitter Newsfeed"
                category="Mobile App"
            />
            <Thumbnail
                link="/photoshop"
                image="http://photoshop-image-url.jpg"
                title="Photoshop Redesign"
                category="Desktop App"
            />
            <Thumbnail
                link="/LinkedIn"
                image="http://LinkedIn-image-url.jpg"
                title="LinkedIn Profile"
                category="Website"
            />
        </div>
    );
}

export default Projects;