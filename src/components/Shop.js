import React, {Component} from 'react';
import '../styles/App.css';
import image from '../images/igp2.png';

import {Link} from 'react-router-dom';
import { Card, CardBlock,
  CardTitle, CardSubtitle, Container, Col, Row, Button } from 'reactstrap';

const baseurl = 'https://sassy-patch-kids.herokuapp.com/';

export default class Shop extends Component {
 state ={
   products: [],
   category: null
 }

 componentDidMount(){
   fetch(`${baseurl}api/products`)
    .then(r => r.json())
      .then(data => this.setState({products: data.filter(products => products.patch)}))
 }

 handleFilterBy = (category) => () => this.setState({category})

  render(){
    const {category} = this.state;

    return(
      <div>
        <Container>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button color="secondary" onClick={this.handleFilterBy(null)}>Shop All</Button>
            <Button color="secondary" onClick={this.handleFilterBy('Music')}>Music</Button>
            <Button color="secondary" onClick={this.handleFilterBy('Farming')}>Farming</Button>
            <Button color="secondary" onClick={this.handleFilterBy('National Parks')}>National Parks</Button>
            <Button color="secondary" onClick={this.handleFilterBy('Movies')}>Movies</Button>
          </div>

          <Row>
          {this.state.products.filter(product => category === null ? true : product.category === category).
              map(product => (
                <Col key={product.id} md='6' lg='4'>
                    <Link to={`/badge/${product.id}`}>
                      <Card style={{margin:'15px', padding:'10px'}}>
                        <img src={`${baseurl}${product.patch}`} width="100%" alt="image" />
                        <CardBlock>
                          <CardTitle>{product.product_name}</CardTitle>
                          <CardSubtitle>{`$${product.price/100}.00`}</CardSubtitle>
                        </CardBlock>
                      </Card>
                    </Link>
                  </Col>
              ))}
            </Row>
        </Container>
        </div>
    )
  }
}
