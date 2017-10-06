import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';
import { Button, Form, Input, Card } from 'reactstrap';
import Iframe from 'react-iframe';


export default class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    postal_code: ''
  }

handle = field => e => this.setState({[field]: e.target.value});



  render() {
    return(
      <div style={{color:'#464547'}} className='container'>
      <Card>
        <Form style={{backgroundColor:'white', padding:'10px', marginTop:'10px', borderRadius:'0.3rem'}}>
            <Input onChange={this.handle('name')} value={this.state.name} type="text" name="name" id="name" placeholder="Name" />
            <br/>
            <Input onChange={this.handle('email')} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="Email" />
            <br/>
            <Input onChange={this.handle('password')} value={this.state.password} type="password" name="password" id="examplePassword" placeholder="Password" />
            <br/>
            <Input onChange={this.handle('address')} value={this.state.address} type="text" name="address" id="address" placeholder="Address" />
            <br/>
            <Input onChange={this.handle('city')} value={this.state.city} type="text" name="city" id="city" placeholder="City" />
            <br/>
            <Input onChange={this.handle('state')} value={this.state.state} type="text" name="state" id="state" placeholder="State" />
            <br/>
            <Input onChange={this.handle('postal_code')} value={this.state.postal_code} type="text" name="postal_code" id="zipcode" placeholder="Zipcode" />
            <br/>
          <Button style={{backgroundColor:'#F90093',border:'none', color:'white'}}>Submit</Button>
        </Form>
      </Card>
      </div>
    )
  }
}
