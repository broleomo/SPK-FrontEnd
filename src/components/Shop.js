import React, {Component} from 'react';
import '../styles/App.css';
import image from '../images/igp2.png';

import {Link} from 'react-router-dom';
import { Card, CardBlock,
  CardTitle, CardSubtitle, Container, Col, Row, Button } from 'reactstrap';

const baseurl = 'https://sassy-patch-kids.herokuapp.com/';

export default class Shop extends Component {
 state ={
   products: []
 }

 componentDidMount(){
   fetch(`${baseurl}api/products`)
    .then(r => r.json())
      .then(data => this.setState({products: data.filter(products => products.patch)}))
 }

  render(){
    return(
      <div>
        <Container>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button color="secondary"><Link to='/shop'>Shop All</Link></Button>
            <Button color="secondary"><Link to='/music'>Music</Link></Button>
            <Button color="secondary"><Link to='/farming'>Farming</Link></Button>
            <Button color="secondary"><Link to='/nature'>Nature</Link></Button>
            <Button color="secondary"><Link to='/movies'>Movies</Link></Button>
          </div>

          <Row>
          {this.state.products.map(product => (
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
