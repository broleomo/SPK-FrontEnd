import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Login extends Component {
  render() {
    return(
      <div style={{color:'#464547'}} className='container'>
        <h3>Please Login:</h3>
          <Form inline>
            <FormGroup>
              <Label for="exampleEmail" hidden>Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="examplePassword" hidden>Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button style={{backgroundColor:'#F90093',border:'none', margin:'5px'}}><Link to='/shop' style={{color:'white'}}>Submit</Link></Button>
            <Button style={{backgroundColor:'#F90093',border:'none'}}><Link to='/register' style={{color:'white'}}> New? Register here!</Link></Button>
          </Form>
      </div>
    )
  }
}
