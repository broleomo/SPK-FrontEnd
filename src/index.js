import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Shop from './components/Shop';
import Badge from './components/Badge';
import Login from './components/Login';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Register from './components/Register';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/badge' component={Badge}/>
        <Route path='/login' component={Login}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/register' component={Register}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>


  ,

  document.getElementById('root'));
registerServiceWorker();
