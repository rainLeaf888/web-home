import React, { Component } from 'react';
import './style.css';
import 'flex.css';
import Header from './Header'
import Footer from './Footer'
import Home from '../../views/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div clasName="content-wrapper">
          <Home></Home>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
