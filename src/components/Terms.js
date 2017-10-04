import React, {Component} from 'react';
import {Card} from 'reactstrap';

export default class Terms extends Component {
  render() {
    return (
      <div className="container">
        <Card style={{padding:'10px'}}>
          <h2>Web Site Terms and Conditions of User</h2>
          <p>
          By accessing this web site, you aer agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.
          </p>
        </Card>
      </div>
    )
  }
}
