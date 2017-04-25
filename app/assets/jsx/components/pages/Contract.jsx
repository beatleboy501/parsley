import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Contract extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.state = {
      accepted: false
    }
  }

  nextStep(e) {
    console.log(e.target);
    this.props.nextStep(e);
  }

  handleAccept(toAccept) {
    this.setState({
      accepted: toAccept
    })
  }

  render() {
    return (
        <div className="medical-history-page">
          <h2>Contract Acceptance</h2>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo.
            Aenean lacinia bibendum nulla sed consectetur.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Etiam porta sem malesuada magna mollis euismod.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Etiam porta sem malesuada magna mollis euismod.
            Nullam quis risus eget urna mollis ornare vel eu leo.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Vestibulum id ligula porta felis euismod semper.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <label style={{marginRight: '10px'}}>I accept the terms and conditions  </label>
          <input type="radio" onClick={this.handleAccept.bind(this, true)}/>
          <span style={{marginRight: '15px', marginLeft: '15px'}}></span>
          <label style={{marginRight: '10px'}}>I do not accept the terms and conditions  </label>
          <input type="radio" onClick={this.handleAccept.bind(this, false)}/>
          <br/><br/>
          <button className="btn-default" onClick={this.props.previousStep}>Back</button>
          <button className={this.state.accepted ? "btn-primary" : "btn-default"} onClick={this.nextStep} disabled={!this.state.accepted}>Save &amp; Continue</button>
        </div>
    );
  }
}
