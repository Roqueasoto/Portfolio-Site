import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Projects from './Projects.js';
import Resume from './Resume.js';
import About from './About.js';
import './css/Fade.css';

function RouteContainer({ location }) {
    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 50}}
                classNames={'fade'}
            >
                <section className="route-section">
                    <Switch location={location}>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/resume" component={Resume}/>
                        <Route path="/home" component={About}/>
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default withRouter(RouteContainer);