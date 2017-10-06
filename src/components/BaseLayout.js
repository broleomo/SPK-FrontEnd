import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import '../styles/App.css';

// import logo from './public/iron-glory-logo.png';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';


export default class BaseLayout extends Component {
  render(){
    return(
      <div className="container">
        <div className="top-nav-container">
          <Navbar light toggleable>
                  <NavbarToggler right />
                  <NavbarBrand href="/"><img width='50%' className='logo' src='../images/iron-glory-logo.png' alt="logo"/>
                  </NavbarBrand>
                  <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink to='/' activeClassName="selected" style={{margin:'5px', color:'#464547'}}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink to='/login' activeClassName="selected" style={{margin:'5px', color:'#464547'}}>Login</NavLink>
                    </NavItem>
                      <NavItem>
                      <NavLink to='/shop' activeClassName="selected" style={{margin:'5px', color:'#464547'}}>Shop</NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink style={{margin:'5px', color:'#464547'}} to='/cart'>Cart</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
        </Navbar>
      </div>
        {this.props.children}

      <div className="bottom-nav-container">
        <Navbar light toggleable>
                <NavbarToggler right />
                <NavbarBrand href="/"><img width='20%' className='logo' src='../images/iron-glory-logo.png' alt="logo"/>
                </NavbarBrand>
                <Collapse navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink to='/terms' activeClassName="selected" style={{margin:'5px', color:'#464547'}}>Terms</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink style={{margin:'20px'}} to='/copyright' activeClassName="selected" style={{margin:'5px', color:'#464547'}}>Copyright</NavLink>
                    </NavItem>

                  </Nav>
                </Collapse>
      </Navbar>
    </div>

    </div>
    )
  }
}
