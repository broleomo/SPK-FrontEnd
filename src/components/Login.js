import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Login extends Component {
state = {
  email: '',
  password: ''
}

handle = field => e => this.setState({[field]: e.target.value});

  render() {
    return(
      <div style={{color:'#464547'}} className='container'>
        <h3>Please Login:</h3>
          <Form inline>
            <FormGroup>
              <Label for="exampleEmail" hidden>Email</Label>
              <Input onChange={this.handle('email')} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" hidden>Password</Label>
              <Input onChange={this.handle('password')} value={this.state.password} type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <Button style={{backgroundColor:'#F90093',border:'none', margin:'5px'}}><Link to='/shop' style={{color:'white'}}>Submit</Link></Button>
            <Button style={{backgroundColor:'#F90093',border:'none'}}><Link to='/register' style={{color:'white'}}> New? Register here!</Link></Button>
          </Form>
      </div>
    )
  }
}
