import React, { Component } from 'react';
import NameComponent from './components/NameComponent'

class App extends Component {

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    return (
      <div className="App">
         <h1> Late Night TV Show Hosts </h1>
         <NameComponent></NameComponent>
      </div>
    );
  }
}

export default App;
