import React, { Component, useState } from 'react'
import { SplitButton, Dropdown, DropdownButton, Carousel, Card, Col, Image, Container, Row } from 'react-bootstrap';



   
    function ControlledCarousel() {
        const [index, setIndex] = useState(0);
        const [direction, setDirection] = useState(null);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
          setDirection(e.direction);
        };
      
        return (
          <><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     
          <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
             <Carousel.Item>
        
<h1 class="display-4"><p class="text-center text-white" note="changeclass">Welcome</p></h1> 
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Carousel.Item>
            
            <Carousel.Item>
              
            <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="http://s5.favim.com/orig/74/black-and-white-buildings-Favim.com-783810.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://t3.ftcdn.net/jpg/02/22/87/34/500_F_222873433_D7j3zsMWhNZbnDTnPTzO2tEPSV2eDlwG.jpg" thumbnail/>
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://farm7.static.flickr.com/6052/6264935858_1b8d717427.jpg" thumbnail />
    </Col>
  </Row>
</Container>
<br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Container>
      
  <Row>

    <Col xs={6} md={6}>
      <Image src="http://arcanumdeepsecrets.files.wordpress.com/2010/06/blast_500x500.jpg" roundedCircle />
    </Col>
  
  </Row>
</Container>
<br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
       
              <Carousel.Caption>
                
                <h3>Third slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
           
          </Carousel>
          </>
        );
      }
      
   

      export default ControlledCarousel