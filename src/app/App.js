import React, { Component } from 'react';
import {BrowserRouter , Route, NavLink} from 'react-router-dom';

import Currency from './components/converters/currency/Currency';
import Length from './components/converters/length/Length';
import Volume from './components/converters/volume/Volume';
import Weight from './components/converters/weight/Weight';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const Links = () => (
    <nav>
        <NavLink exact to='/'>Currency</NavLink>
        <NavLink to='/length'>Length</NavLink>
        <NavLink to='/volume'>Volume</NavLink>
        <NavLink to='/weight'>Weight</NavLink>
    </nav>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span>Converter for values</span>
        </div>
        <BrowserRouter>
            <div>
                <Links/>
                <Route exact path='/' component={Currency}/>
                <Route path='/length' component={Length}/>
                <Route path='/volume' component={Volume}/>
                <Route path='/weight' component={Weight}/>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
