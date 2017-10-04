import React, {Component} from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';

import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Card, CardText, CardBlock, CardTitle, CardSubtitle, Button, FormGroup, Label, Input } from 'reactstrap';

export default class Badge extends Component {
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
            <img src='igp2.png' alt='badge' width="100%"/>
        </div>
            </Col>
            <Col md='6' lg='6'>
          <div className='badge-container'>

            <Card>
              <CardBlock>
                <CardTitle>Badge 1 Name</CardTitle>
                  <CardSubtitle>$9.99</CardSubtitle>
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
                  <CardText>Badge 1 description. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</CardText>
                  <Button style={{backgroundColor:'#F90093',border:'none'}}><Link to='/cart' style={{color:'white'}}> Add to Cart!</Link></Button>
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
