import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <div className="button-component">
          <button></button>
        </div>
    );
  }
}
