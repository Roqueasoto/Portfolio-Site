import React from 'react';
import './css/App.css';
import { Navigation } from "./Components/Navigation";
import { BrowserRouter } from "react-router-dom";
import RouteContainer from "./Components/RouteContainer";
import Social from "./Components/Social";

export class App extends React.Component {

    constructor(props){
        super(props);
        this.portfolioRef = React.createRef();
    };

    handleScrollTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    scrollToPortfolio() {
        window.scrollTo({behavior: 'smooth', top: this.portfolioRef.current.offsetTop})
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation handleScroll={() => this.scrollToPortfolio()}/>
                    <RouteContainer portfolioRef={this.portfolioRef}
                                    handleScroll={() => this.scrollToPortfolio()}
                    />
                    <Social handleScroll={() => this.handleScrollTop()} />
                </div>
            </BrowserRouter>
        );
    }
}