import React, { Component } from 'react'
import Header from './Header'
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem,  Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'react-bootstrap';

  

export default class About extends Component {


    googleMap=()=>{
            //click the link below to edit location, change the class depth number to change layout
        return ( <div id="map-container-google-2" class="z-depth-1-half map-container">
        <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
        allowfullscreen></iframe></div> ) 
    }
    render() {
        return (
            <>
    
              <Header/>    
              <Container>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

              <div><div class="jumbotron">
  <h1 class="display-4"><div class="text-center">About Us</div></h1>
  <br/><br/><br/>
  <p class="text-center"> {this.googleMap()} </p>
  <br/><br/><br/>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4" />

  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
  <p class="text-center"> <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> 
</p>
</div></div>
              </Container> 
              
            


             
            </>
        )
    }
}
