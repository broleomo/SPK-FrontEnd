import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';

import { Container, Row, Col, Card, CardBlock, CardTitle, CardSubtitle, Button, FormGroup, Label, Input, Form } from 'reactstrap';

export default class Cart extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
    card: '',
    date: ''
  }

  handle = field => e => this.setState({[field]: e.target.value});

  handleUser = e => {
    e.preventDefault();
  }

  handleGuest = e => {
    e.preventDefault();
    console.log('pow!');
  }

  render(){
    let guest = <div>
                <Card>
                  <Form style={{color:'#F90093', backgroundColor:'white', padding:'10px', borderRadius:'0.3rem'}}>
                    <p style={{textAlign:'center'}}>Checkout As Guest</p>
                      <Input onChange={this.handle('name')} value={this.state.name} type="text" name="name" id="name" placeholder="Name" />
                      <br/>
                      <Input onChange={this.handle('email')} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="Email" />
                      <br/>
                      <Input onChange={this.handle('address')} value={this.state.address} type="text" name="address" id="address" placeholder="Address" />
                      <br/>
                      <Input onChange={this.handle('city')} value={this.state.city} type="text" name="city" id="city" placeholder="City" />
                      <br/>
                      <Input onChange={this.handle('state')} value={this.state.state} type="text" name="state" id="state" placeholder="State" />
                      <br/>
                      <Input onChange={this.handle('postal_code')} value={this.state.postal_code} type="text" name="postal_code" id="zipcode" placeholder="Zipcode" />
                      <br/>
                    <Link to="#"><Button style={{backgroundColor:'#F90093',color:'white',border:'none', width:'100%'}}>Continue</Button></Link>
                  </Form>
                </Card>
                <Card style={{marginTop:'10px'}}>
                  <Form style={{color:'#F90093', backgroundColor:'white', padding:'10px', borderRadius:'0.3rem'}}>
                    <p style={{textAlign:'center'}}>Payment Information</p>
                      <Label>Name</Label>
                      <Input onChange={this.handle('name')} value={this.state.name} type="text" name="name" id="name" placeholder="Name" />
                      <br/>
                      <Label>Card Number</Label>
                      <Input onChange={this.handle('card')} value={this.state.card} type="text" name="card" placeholder="xxxx-xxxx-xxxx-xxxx" />
                      <br/>
                      <Label>Expiration Date</Label>
                      <Input onChange={this.handle('date')} value={this.state.date} type="text" name="date" placeholder="xx/xxxx" />
                      <br/>
                      <Link to="#"><Button style={{backgroundColor:'#F90093',color:'white',border:'none', width:'100%'}}>Continue</Button></Link>
                  </Form>
                </Card>
            </div>

    let user = <div>
                <Card>
                  <Form style={{color:'#F90093', backgroundColor:'white', padding:'10px', borderRadius:'0.3rem'}}>
                    <p style={{textAlign:'center'}}>Your Information</p>
                      <Input onChange={this.handle('name')} value={this.state.name} type="text" name="name" id="name" placeholder="Name" />
                      <br/>
                      <Input onChange={this.handle('email')} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="Email" />
                      <br/>
                      <Input onChange={this.handle('address')} value={this.state.address} type="text" name="address" id="address" placeholder="Address" />
                      <br/>
                      <Input onChange={this.handle('city')} value={this.state.city} type="text" name="city" id="city" placeholder="City" />
                      <br/>
                      <Input onChange={this.handle('state')} value={this.state.state} type="text" name="state" id="state" placeholder="State" />
                      <br/>
                      <Input onChange={this.handle('postal_code')} value={this.state.postal_code} type="text" name="postal_code" id="zipcode" placeholder="Zipcode" />
                      <br/>
                    <Link to="#"><Button style={{backgroundColor:'#F90093',color:'white',border:'none', width:'100%'}}>Continue</Button></Link>
                  </Form>
                </Card>
                <Card style={{marginTop:'10px'}}>
                  <Form style={{color:'#F90093', backgroundColor:'white', padding:'10px', borderRadius:'0.3rem'}}>
                    <p style={{textAlign:'center'}}>Payment Information</p>
                      <Label>Name</Label>
                      <Input onChange={this.handle('name')} value={this.state.name} type="text" name="name" id="name" placeholder="Name" />
                      <br/>
                      <Label>Card Number</Label>
                      <Input onChange={this.handle('card')} value={this.state.card} type="text" name="card" placeholder="xxxx-xxxx-xxxx-xxxx" />
                      <br/>
                      <Label>Expiration Date</Label>
                      <Input onChange={this.handle('date')} value={this.state.date} type="text" name="date" placeholder="xx/xxxx" />
                      <br/>
                      <Link to="#"><Button style={{backgroundColor:'#F90093',color:'white',border:'none', width:'100%'}}>Continue</Button></Link>
                  </Form>
                </Card>
            </div>

    return(
      <div className='container'>

        <Container>
          <Row>
            <Col md='6' lg='6'>
              <Card style={{padding:'10px', marginBottom:'10px'}}>
                <FormGroup >
                  <p style={{color:'#F90093', textAlign:'center'}}>Returning Customer?</p>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input onChange={this.handle('email')} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword" hidden>Password</Label>
                    <Input onChange={this.handle('password')} value={this.state.password} type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                <Button style={{backgroundColor:'#F90093',color:'white',border:'none', width:'100%', marginBottom:'5px'}}><Link to='#' style={{color:'white'}}>Login</Link></Button>
                <Button onClick={this.handleGuest} style={{backgroundColor:'#464547',border:'none', width:'100%'}}><Link to='#' style={{color:'white'}}>Checkout As Guest</Link></Button>
              </Card>
            </Col>





            <Col md='6' lg='6'>
          <div className='badge-container'>
            <Card>
              <CardBlock>
              <CardTitle>Order Summary</CardTitle>
                <Row>
                  <Col md='6' lg='6'>
                    <img src='igp2.png' alt='badge' width="50%"/>
                    <CardSubtitle>Badge Name</CardSubtitle>
                    </Col>
                </Row>
                <Row>
                  <Col md='6' lg='6'>
                      <FormGroup>
                        <Label for="exampleSelect">Quantity</Label>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                        <p>Unit Price: $ </p>
                      </FormGroup>
                    </Col>
                  </Row>
                    <p> Subtotal: $0.00</p>
                    <p> Tax: $0.00</p>
                    <p> Shipping: $0.00</p>
                    <p> Total: $0.00</p>
                </CardBlock>
                <Button style={{backgroundColor:'#F90093',border:'none', width:'100%'}}><Link to='/thanks' style={{color:'white'}}>Complete Order</Link></Button>
              </Card>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}
