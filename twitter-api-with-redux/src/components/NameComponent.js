import React, { Component } from 'react';


class NameComponent extends Component {

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    return (
      <div>
         <button className="Jim"> Jimmy Fallon </button>
         <button className="James"> James Corden </button>
         <button className="Conan"> Conan O'Brien </button>
      </div>
    );
  }
}

export default NameComponent;
