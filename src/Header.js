import React, { Component } from 'react'
import { SplitButton, Dropdown, DropdownButton, ButtonToolbar, Navbar, Form, Nav, FormControl, Button, Carousel } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';

//using react-router-dom for the SPA


export default class Header extends Component {

    state = ({
        searchTerm: []
    })

    buttonClicked=()=>{
        console.log('Clicked!')
    }

    searchUpdate=(event)=>{
       return this.setState({
            searchTerm: event.target.value
        })   
    }


    searchSubmit=()=>{
        console.log(this.state.searchTerm)
    }



    render() {

    

        return (
        
        <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Company Name</Navbar.Brand>
    <Nav className="mr-auto">
    <Link  exact to="/" >Home</Link>
    <Link  exact to="/about" >About</Link>
    <Link  exact to="/contact" >Contact</Link>
    </Nav>
    <Form onSubmit={this.searchSubmit} inline>
    <FormControl onKeyUp={this.searchUpdate}   type="submit"  type="text" placeholder="Search" className="mr-sm-2" />
    <Button onClick={this.buttonClicked} variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </div>

        )
    }
}
