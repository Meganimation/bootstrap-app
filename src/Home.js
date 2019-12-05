import React, { Component } from 'react'
import Header from './Header'
import ControlledCarousel from './ControlledCarousel'
import { Container } from 'react-bootstrap'



export default class Home extends Component {
    render() {
        return (
            <>
            <Header/>    
            <Container>
            <br/><br/><br/><br/>

</Container>
            <ControlledCarousel />
      
          </>
        )
    }
}
