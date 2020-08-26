import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from "./Home.js";
import '../css/Fade.css';

function RouteContainer(props) {
    return (
        <div>
            <Route path='/' render={() =>
                <Home {...props} portfolioRef={props.portfolioRef}
                      handleScroll={() => props.handleScroll()}
                />}
            />
        </div>
    );
}

export default withRouter(RouteContainer);