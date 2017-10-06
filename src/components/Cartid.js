import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';

import { Container, Row, Col, Card, CardBlock, CardTitle, CardSubtitle, Button, FormGroup, Label, Input, Form } from 'reactstrap';

const baseurl = 'https://sassy-patch-kids.herokuapp.com/';

export default class Cartid extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
    card: '',
    date: '',
    results: ''
  }

  handle = field => e => this.setState({[field]: e.target.value});

  handleUser = e => {
    e.preventDefault();
  }

  handleGuest = e => {
    e.preventDefault();
    console.log('pow!');
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    let url = `${baseurl}api/products/${id}`;
    fetch(url)
      .then(response => response.json())
        .then(results => {this.setState({results:results})})
  }


  render(){

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
              </Form>
            </Card>
            </Col>





            <Col md='6' lg='6'>
          <div className='badge-container'>
            <Card>
              <CardBlock>
              <CardTitle>Order Summary</CardTitle>
                <Row>
                  <Col md='6' lg='6'>
                    <img src={`${baseurl}${this.state.results.patch}`} alt='image' width="50%"/>
                    <CardSubtitle>{this.state.results.product_name}</CardSubtitle>
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
                        <p>Unit Price: {`$${this.state.results.price/100}.00`}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                    <p> Subtotal: {`$${this.state.results.price/100}.00`}</p>
                    <p> Tax: {`$${7}.00`}</p>
                    <p> Shipping: {`$${5}.00`}</p>
                    <p> Total: {`$${(this.state.results.price/100)+(7)+(7)}.00`}</p>
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
