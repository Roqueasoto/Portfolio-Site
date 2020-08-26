import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import Home from "./Home.js";
import '../css/Fade.css';

function RouteContainer(props) {
    return (
        <div>
            <Route path={process.env.PUBLIC_URL + "/home"} render={() =>
                <Home {...props} portfolioRef={props.portfolioRef}
                      handleScroll={() => props.handleScroll()}
                />}
            />
            <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                render={() => {return (<Redirect to={process.env.PUBLIC_URL + "/home"} />)}}
            />
        </div>
    );
}

export default withRouter(RouteContainer);