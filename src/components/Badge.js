import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';

import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Card, CardText, CardBlock, CardTitle, CardSubtitle, Button, FormGroup, Label, Input } from 'reactstrap';

export default class Badge extends Component {
  state ={
    results: ''
  }

componentDidMount(){
  const {id} = this.props.match.params;
  let url = `https://sassy-patch-kids.herokuapp.com/api/products/${id}`;
  fetch(url)
    .then(response => response.json())
      .then(results => {this.setState({results:results})})
}

  render(){
    return(
      <div className='container'>
        <div className='breadcrumbs'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/shop'>Shop</Link></BreadcrumbItem>
            <BreadcrumbItem active>Badge Name</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Container>
          <Row>
            <Col md='6' lg='6'>
          <div className='badge-container'>
            <img src={this.state.results.patch_id} alt='badge' width="100%"/>
        </div>
            </Col>
            <Col md='6' lg='6'>
          <div className='badge-container'>

            <Card>
              <CardBlock>
                <CardTitle>{this.state.results.product_name}</CardTitle>
                  <CardSubtitle>{`$${this.state.results.price/100}.00`}</CardSubtitle>
                  <FormGroup>
                    <Label for="exampleSelect">Quantity</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                  </FormGroup>
                  <CardText>{this.state.results.description}</CardText>
                  <Button style={{backgroundColor:'#F90093',border:'none'}}><Link to={`/cart/${this.state.results.id}`} style={{color:'white'}}> Add to Cart!</Link></Button>
              </CardBlock>
            </Card>
        </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
