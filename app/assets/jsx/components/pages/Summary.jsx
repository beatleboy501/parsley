import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.flatten = this.flatten.bind(this);
    this.renderMedical = this.renderMedical.bind(this);
    this.renderDemographic = this.renderDemographic.bind(this);
  }

  nextStep(e) {
    this.props.nextStep(e);
  }

  // Would normally get this from a lib or util class
  flatten(data) {
    var result = {};
    function recurse (cur, prop) {
      if (Object(cur) !== cur) {
        result[prop] = cur;
      } else if (Array.isArray(cur)) {
        for(var i=0, l=cur.length; i<l; i++)
          recurse(cur[i], prop + "[" + i + "]");
        if (l == 0)
          result[prop] = [];
      } else {
        var isEmpty = true;
        for (var p in cur) {
          isEmpty = false;
          recurse(cur[p], prop ? prop+"."+p : p);
        }
        if (isEmpty && prop)
          result[prop] = {};
      }
    }
    recurse(data, "");
    return result;
  }

  renderMedical(){
    return Object.entries(this.flatten(this.props.medicalHistory)).map(([key,value])=>{
      if(typeof value === 'object'){
        let toReturn = Object.entries(value).map(([k, v]) => {
          return (
              <div>{k} : {v.toString()}</div>
          );
        });
        return toReturn;
      } else {
        return (
            <div>{key} : {value.toString()}</div>
        );
      }
    });
  }

  renderDemographic(){
    return Object.entries(this.props.demographicData).map(([key,value]) => {
      return (
          <div>{key} : {value.toString()}</div>
      );
    });
  }

  render() {
    return (
        <div className="summary-page">
          <h2>Summary</h2>
          <h3>Demographic Data</h3>
          <p>{this.renderDemographic()}</p>
          <h3>Medical History</h3>
          <p>{this.renderMedical()}</p>
          <button className="btn-default" onClick={this.props.previousStep}>Back</button>
          <button className="btn-primary" onClick={this.nextStep}>Save &amp; Continue</button>
        </div>
    );
  }
}
