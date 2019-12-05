import React, { Component } from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'
import { SplitButton, Dropdown, DropdownButton, ButtonToolbar, Navbar, Form, Nav, FormControl, Button, Carousel } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        return (
            <>
            <Header/>  
            <Container> 
            <section class="mb-4" >

<br/><br/><br/><br/><br/><br/><br/>

<h1 class="display-4 text-white">Contact us</h1>
<br/><br/><br/><br/><br/><br/><br/>
<p class="text-center w-responsive mx-auto mb-5 text-white">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div class="row" >


    <div class="col-md-9 mb-md-0 mb-5 ">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <div class="row">

                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control" />
                        <label for="name" class="text-white">Your name</label>
                    </div>
                </div>
          
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control" />
                        <label for="email" class="text-white">Your email</label>
                    </div>
                </div>
          

            </div>
      
            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control" />
                        <label for="subject" class="text-white">Subject</label>
                    </div>
                </div>
            </div>
       

            <div class="row">

        
                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message" class="text-white">Your message</label>
                    </div>

                </div>
            </div>
       

        </form>
        <br/><br/><br/><br/>
        <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>
 
    <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x "></i>
                <p class="text-white"> San Francisco, CA 94126, USA</p>
            </li>

            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p class="text-white">+ 01 234 567 89</p>
            </li>

            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p class="text-white">contact@mdbootstrap.com</p>
            </li>
        </ul>
    </div>
    </div>


</section> 
</Container> 
            
            </>  
        )
    }
}
