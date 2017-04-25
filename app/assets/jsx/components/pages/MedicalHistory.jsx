import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MedicalHistory extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.renderMedicalQuestions = this.renderMedicalQuestions.bind(this);
  }

  nextStep(e) {
    this.props.nextStep(e);
  }

  renderMedicalQuestions() {
    return Object.entries(this.props.fieldData.questions).map(([key,value], index) => {
      if (value.response != null) {
        const radios = ['Yes', 'No'].map((option) => {
          return (
              <div>
                <label>{option}: </label>
                <input name={key} ref={option} type="radio"
                       value={option}
                       onChange={this.props.handleMedicalQuestionResponse.bind(this, key, value, option)}>
                </input>
                <br/>
              </div>
          )
        });
        return (
            <div>
              <br/>
              <label>{index + 1}.){value.text}</label>
              <br/>
              {radios}
              <label>How much and how often?</label>
              <br/>
              <textarea onChange={this.props.handleMedicalQuestionExplanation.bind(this, key, value)}></textarea>
            </div>
        );
      } else {
        return (
            <div>
              <br/>
              <label>{index + 1}.){value.text}</label>
              <br/>
              <textarea onChange={this.props.handleMedicalQuestionExplanation.bind(this, key, value)}></textarea>
            </div>
        );
      }
    });
  }

  render() {
    const diseaseSection1 = Object.keys(this.props.fieldData.diseases).map((disease)=> {
      return (
          <div>
            <label>{disease}</label>
            <input type="checkbox" name={disease} onChange={this.props.handleDisease.bind(this, disease)}/>
          </div>
      );
    });
    const diseaseSection2 = diseaseSection1.splice(0, diseaseSection1.length / 2);
    const medicalQuestionElements = this.renderMedicalQuestions();
    const familyRelationsElements = this.props.fieldData.familyRelations.map((relation, index) => {
      return (
          <div>
            <input type="text" placeholder="Name" onChange={this.props.handleRelationChange.bind(this, 'name', index)}/>
            <input type="tel" placeholder="Phone" onChange={this.props.handleRelationChange.bind(this, 'phone', index)}/>
            <input type="text" placeholder="Relation" onChange={this.props.handleRelationChange.bind(this, 'relationship', index)}/>
            <br/>
          </div>
      );
    });
    return (
        <div className="medical-history-page">
          <div className="row" style={{ marginLeft: '1px'}}>
            <h2>Medical History</h2>
            <h3>Diseases: Please check all that apply</h3>
            <div className="col-md-6" style={{float: 'left'}}>
              {diseaseSection1}
            </div>
            <div className="col-md-6" style={{float: 'right'}}>
              {diseaseSection2}
            </div>
          </div>
          <div className="row" style={{ marginLeft: '10px'}}>
            <h3>Family Relations: </h3>
            {familyRelationsElements}
            <br/>
          </div>
          <div className="row" style={{ marginLeft: '10px'}}>
            <h3>Medical Questions: </h3>
            {medicalQuestionElements}
          </div>
          <div className="row" style={{ marginLeft: '10px'}}>
            <br/><br/>
            <button className="btn-default" onClick={this.props.previousStep}>Back</button>
            <button className="btn-primary" onClick={this.nextStep}>Save &amp; Continue</button>
          </div>
        </div>
    );
  }
}
