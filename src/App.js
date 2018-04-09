import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          I've already started,........
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>给组件传参：{this.props.myParam}</p><br/>
        <DatePicker />
        <p>按需加载</p>
        
      </div>
    );
  }
}

export default App;
