import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Submit extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(e) {
    console.log(e.target);
    this.props.nextStep(e);
  }

  render() {
    return (
        <div className="medical-history-page">
          <h2>Submit</h2>
          <button className="btn-default" onClick={this.props.previousStep}>Back</button>
          <button className="btn-primary" onClick={this.nextStep}>Save &amp; Continue</button>
        </div>
    );
  }
}
