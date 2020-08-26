import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import Home from "./Home.js";
import '../css/Fade.css';

function RouteContainer(props) {
    return (
        <div>
            <Route path={"/home"} render={() =>
                <Home {...props} portfolioRef={props.portfolioRef}
                      handleScroll={() => props.handleScroll()}
                />}
            />
            <Route
                exact
                path={"/"}
                render={() => {return (<Redirect to={"/home"} />)}}
            />
        </div>
    );
}

export default withRouter(RouteContainer);