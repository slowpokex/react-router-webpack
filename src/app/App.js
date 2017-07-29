import React, { Component } from 'react';
import {BrowserRouter , Route, NavLink} from 'react-router-dom';

import Currency from './components/converters/currency/Currency';
import Length from './components/converters/length/Length';
import Volume from './components/converters/volume/Volume';
import Weight from './components/converters/weight/Weight';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const Links = () => (
  <div>
    <nav className='navbar navbar-inverse navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand' href='#'>Converter</a>
        </div>
        <div id='navbar' className='collapse navbar-collapse'>
          <ul className='nav navbar-nav'>
            <li><NavLink exact to='/' activeClassName='active'>Currency</NavLink></li>
            <li><NavLink to='/length' activeClassName='active'>Length</NavLink></li>
            <li><NavLink to='/volume' activeClassName='active'>Volume</NavLink></li>
            <li><NavLink to='/weight' activeClassName='active'>Weight</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <span>Converter for values</span>
        </div>
        <BrowserRouter>
            <div>
              <Links/>
              <div className='container' style={{marginTop: 40 + 'px'}}>
                <Route exact path='/' component={Currency}/>
                <Route path='/length' component={Length}/>
                <Route path='/volume' component={Volume}/>
                <Route path='/weight' component={Weight}/>
              </div>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
