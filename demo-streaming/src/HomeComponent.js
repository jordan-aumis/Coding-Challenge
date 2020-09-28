import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state= {
            title: ["Movie", "Serie"]
        }
    }
    
    render() {
        console.log(this.state.title[0])
        return (
            <main>
                <div className="title-page">
                    <h2>Popular Title</h2>
                </div>
                <div className="card">
                    <div className="Home-card">
                        <h2>Movies</h2>
                    </div>
                        <Link to="/movies">Popular movies</Link>
                </div>
                <div className="card">
                    <div className="Home-card">
                        <h2>Series</h2>
                    </div>
                        <Link to="/series">Popular series</Link>
                </div>
            </main>
        )
    }
}
