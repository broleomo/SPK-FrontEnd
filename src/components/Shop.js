import React, {Component} from 'react';
import '../styles/App.css';
import image from '../styles/images/igp2.png';

import {Link} from 'react-router-dom';
import { Card, CardBlock,
  CardTitle, CardSubtitle, Container, Col, Row, Button } from 'reactstrap';

export default class Shop extends Component {
  render(){
    return(
      <div>
        <Container>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button color="secondary">Shop All</Button>
            <Button color="secondary">Music</Button>
            <Button color="secondary">Farming</Button>
            <Button color="secondary">Nature</Button>
            <Button color="secondary">Movies</Button>
          </div>
          <Row>
            <Col md='6' lg='4'>
                <Link to="/badge">
                <Card style={{margin:'15px', padding:'10px'}}>
                  <img src={image} width="100%"  alt="imager" />
                  <CardBlock>
                    <CardTitle>Badge 1</CardTitle>
                    <CardSubtitle>Badge 1 Price</CardSubtitle>
                  </CardBlock>
                </Card>
              </Link>
            </Col>
            <Col md='6' lg='4'>
                <Link to="/badge">
                <Card style={{margin:'15px', padding:'10px'}}>
                  <img src={image} width="100%"  alt="images" />
                  <CardBlock>
                    <CardTitle>Badge 1</CardTitle>
                    <CardSubtitle>Badge 1 Price</CardSubtitle>
                  </CardBlock>
                </Card>
              </Link>
            </Col>
            <Col md='6' lg='4'>
                <Link to="/badge">
                <Card style={{margin:'15px', padding:'10px'}}>
                  <img src={image} width="100%"  alt="imagess" />
                  <CardBlock>
                    <CardTitle>Badge 1</CardTitle>
                    <CardSubtitle>Badge 1 Price</CardSubtitle>
                  </CardBlock>
                </Card>
              </Link>
            </Col>
            <Col md='6' lg='4'>
                <Link to="/badge">
                <Card style={{margin:'15px', padding:'10px'}}>
                  <img src={image} width="100%"  alt="imagesss" />
                  <CardBlock>
                    <CardTitle>Badge 1</CardTitle>
                    <CardSubtitle>Badge 1 Price</CardSubtitle>
                  </CardBlock>
                </Card>
              </Link>
            </Col>


          </Row>
      </Container>
      </div>
    )
  }
}
