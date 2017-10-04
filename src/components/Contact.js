import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Contact extends Component {
  render(){
    return(
      <div>
      <Form style={{backgroundColor:'white', padding:'10px', marginTop:'10px', borderRadius:'0.3rem'}}>
          <FormGroup>
            <Label for="examplePassword">Name</Label>
            <Input type="text" name="name" id="examplePassword" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Leave a comment</Label>
            <Input type="textarea" name="text" id="exampleText" placeholder="Comment..."/>

          </FormGroup>
          <Link to="/thankyou"><Button style={{backgroundColor:'#F90093',color:'white',border:'none'}}>Submit</Button></Link>
        </Form>
      </div>
    )
  }
}
