import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class Thanks extends React.Component {
  render(){
    return(
      <div>
      <Jumbotron style={{backgroundColor:'white', marginTop:'10px'}}>
          <h1 className="display-3" style={{color:'#F90093', fontFamily: 'cursive', textAlign:'center', margin:'30px'}}>Thank you!</h1>
          <p className="lead" style={{textAlign:'center'}}>We thank you for your business, it is truly appreciated.</p>
          <div style={{display:'flex', justifyContent:'center'}}>
            <img style={{width:'30%', height:'30%'}} src='../images/iron-glory-logo.png' alt='logo'/>
          </div>

        </Jumbotron>
      </div>
    )
  }
}
