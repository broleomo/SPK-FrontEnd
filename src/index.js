import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Shop from './components/Shop';
import Badge from './components/Badge';
import Login from './components/Login';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Register from './components/Register';
import Terms from './components/Terms';
import Thanks from './components/Thanks';
import Music from './components/Music';
import Farming from './components/Farming';
import Nature from './components/Nature';
import Movies from './components/Movies';
import Cartid from './components/Cartid';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/badge/:id' component={Badge}/>
        <Route path='/login' component={Login}/>
        <Route path='/cart/:id' component={Cartid}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/register' component={Register}/>
        <Route path='/terms' component={Terms}/>
        <Route path='/thanks' component={Thanks}/>
        <Route path='/music' component={Music}/>
        <Route path='/farming' component={Farming}/>
        <Route path='/nature' component={Nature}/>
        <Route path='/movies' component={Movies}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>


  ,

  document.getElementById('root'));
registerServiceWorker();
