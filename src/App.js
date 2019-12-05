import React, { Component } from 'react'
import ThemeSwitcher2 from'./ThemeSwitcher2'
import Header from './Header'
import MainContainer from './ControlledCarousel'
import ControlledCarousel from './ControlledCarousel'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';


export default class App extends Component {
  render() {
    return (
  
          <>

    <Router> 
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    </Switch>       
    </Router>



      </>
  
    )
  }
}
