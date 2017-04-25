import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../Input.jsx'

export default class DemographicData extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.renderPersonalInfo = this.renderPersonalInfo.bind(this);
  }

  nextStep(e) {
    e.preventDefault();
    this.props.nextStep();
  }

  renderPersonalInfo() {
    return (
        <div>
          <label>First Name: </label>
          <input name="firstName" ref="firstName" type="text"
                 onChange={this.props.handleChange.bind(this, 'firstName')}></input>
          <br/>
          <label>Last Name: </label>
          <input name="lastName" ref="lastName" type="text"
                 onChange={this.props.handleChange.bind(this, 'lastName')}></input>
          <br/>
          <label>Email: </label>
          <input name="email" ref="email" type="email"
                 onChange={this.props.handleChange.bind(this, 'email')}></input>
        </div>
    );
  }

  renderAddress() {
    return (
        <div>
          <label>Street Address: </label>
          <input name="streetAddress" ref="streetAddress" type="text"
                 onChange={this.props.handleChange.bind(this, 'streetAddress')}></input>
          <br/>
          <label>City: </label>
          <input name="city" ref="city" type="text"
                 onChange={this.props.handleChange.bind(this, 'city')}></input>
          <br/>
          <label>State: </label>
          <input name="state" ref="state" type="text" maxLength="2"
                 onChange={this.props.handleChange.bind(this, 'state')}></input>
          <br/>
          <label>Zip Code: </label>
          <input name="zip" ref="zip" type="number" maxLength="5"
                 onChange={this.props.handleChange.bind(this, 'zip')}></input>
        </div>
    );
  }

  render() {
    const maritalStatusOptions = ['Married', 'Single', 'Divorced', 'Widowed', 'Separated', 'Life Partner'];
    const maritalStatusElements = maritalStatusOptions.map((status)=> {
      return (
          <div>
            <label>{status}: </label>
            <input name="marital" ref="marital" type="radio" value={status}
                   onChange={this.props.handleChange.bind(this, 'marital')}/>
            <br/>
          </div>
      )});
    const genderElements = ['M', 'F'].map((gender) => {
      return (
          <div>
            <label>{gender}: </label>
            <input name="gender" ref={gender} type="radio" value={gender}
                   onChange={this.props.handleChange.bind(this, 'gender')}></input>
            <br/>
          </div>
      );
    });
    return (
        <div className="demographic-data-page">
          <h2>Demographic Data</h2>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <form onSubmit={this.props.onSubmit}>
                <h3>Personal Info</h3>
                {this.renderPersonalInfo()}
                <br/>
                <h3>Gender:</h3>
                <br/>
                {genderElements}
                <h3>Marital Status:</h3>
                <br/>
                {maritalStatusElements}
                <h3>Date of Birth</h3>
                <label>Month / Day / Year: </label>
                <input name="dob" ref="dob" type="date"
                       onChange={this.props.handleChange.bind(this, 'dob')}></input>
                <br/>
                <h3>Address</h3>
                {this.renderAddress()}
                <br/>
                <label>Phone Number: </label>
                <input name="phone" ref="phone" type="tel"
                       onChange={this.props.handleChange.bind(this, 'phone')}></input>
                <br/>
                <button className="btn-primary" onClick={this.nextStep}>Save &amp; Continue</button>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
    );
  }
}
