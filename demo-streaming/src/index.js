import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import Header from "./Header"
import Footer from './Footer'
import HomeComponent from "./HomeComponent"
import MoviesComponent from './MoviesComponent'
import SeriesComponent from './SeriesComponent'
import MovieIdComponent from './MovieIdComponent'
import SerieIdComponent from './SerieIdComponent'
import NotFound from './NotFound'

const Routing= (
  <Router>
  <div>
  <Header/>
  <Switch>
  <Route exact path="/" component={HomeComponent}/>
  <Route exact path="/movies" component={MoviesComponent}/>
  <Route exact path="/series" component={SeriesComponent}/>
  <Route exact path="/movie/:id" component={MovieIdComponent}/>
  <Route exact path="/serie/:id" component={SerieIdComponent}/>
  <Route component={NotFound}/>
  </Switch>
  <Footer/>
  </div>
  </Router>
)

ReactDOM.render(
  Routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
