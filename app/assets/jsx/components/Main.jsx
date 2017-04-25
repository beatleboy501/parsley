import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DemographicData from './pages/DemographicData.jsx'
import MedicalHistory from './pages/MedicalHistory.jsx'
import Contract from './pages/Contract.jsx'
import Summary from './pages/Summary.jsx'
import Submit from './pages/Submit.jsx'
var assign = require('object-assign');

const propTypes = {
  showNavigation: React.PropTypes.bool
};

let medicalHistory = {
  diseases: {
    cancer: false, heartDisease: false,
    diabetes: false, stroke: false,
    highBloodPressure: false, highCholesterol: false,
    liverDisease: false, alcoholDrugAbuse: false,
    anxietyDepression: false, tuberculosis: false,
    anesthesiaComplications: false, geneticDisorder: false,
    hypertension: false, heartAttack: false,
    chronicObstructivePulmonaryDisease: false,
    hepatitis: false, backPain: false,
    psychoticDisorder: false, irritableBowelSyndrome: false,
    seizures: false, substanceAbuse: false,
    depression: false, kidneyDisease: false,
    hiv: false, gastroEsophagealRefluxDisease: false,
    thyroidDisease: false, bipolar: false,
    eyeDisease: false, arthritis: false,
    asthma: false
  },
  familyRelations: [{name: '', phone: '', relationship: ''},{name: '', phone: '', relationship: ''},{name: '', phone: '', relationship: ''}],
  questions: {
    smoke: { text: 'Do you smoke any tobacco products?', response: '', explanation: ''},
    alcohol: { text: 'Do you drink alcohol?', response: '', explanation: ''},
    drugs: { text: 'Have you regularly used illicit drugs?', response: '', explanation: ''},
    medications: {text: 'Current medications: Please list any medications you are currently taking including non-prescription medications, vitamins and supplements.', explanation: ''},
    allergies: {text: 'Medication allergies or reactions: Please list any medication allergies or reactions.', explanation: ''},
    surgeries: {text: 'List any surgeries or hospital stays you have had and their approximate date / year', explanation: ''},
    typeOfSurgeries: {text: 'Type of surgery or reason for hospitalization', explanation: ''},
  }
};

let demographicData = {
  firstName: '',
  lastName: '',
  email: '',
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
  dob: '',
  gender: '',
  marital: '',
  phone: ''
};

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
    this.showStep = this.showStep.bind(this);
    this.saveValues = this.saveValues.bind(this);
    this.state = {
      step: 1,
    }
  }

  handleChange(name, e) {
    demographicData[name] = e.target.value;
  }

  handleRelationChange(name, index, e) {
    let relation = medicalHistory.familyRelations[index];
    relation[name] = e.target.value;
  }

  handleRemoveRelation(index, e) {
    medicalHistory.familyRelations.splice(index, 1);
  }

  handleDisease(name, e) {
    medicalHistory.diseases[name] = e.target.checked;
  }

  handleMedicalQuestionResponse(key, value, option, e) {
    let question = medicalHistory.questions[key];
    question.response = option;
  }

  handleMedicalQuestionExplanation(key, value, e) {
    let question = medicalHistory.questions[key];
    question.explanation = e.target.value;
  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    })
  }

  previousStep() {
    this.setState({
      step : this.state.step - 1
    })
  }

  submitRegistration() {
    this.nextStep();
  }

  saveValues(fieldValue){
    demographicData = assign({}, demographicData, fieldValue)
  }

  showStep() {
    switch (this.state.step) {
      case 1:
        return (<DemographicData fieldData={demographicData}
            saveValues={this.saveValues}
            handleChange={this.handleChange}
            onInputChange={this.handleInputChange}
            nextStep={this.nextStep}
            previousStep={this.previousStep}></DemographicData>);
      case 2:
        return (<MedicalHistory fieldData={medicalHistory}
            handleRelationChange={this.handleRelationChange}
            handleRemoveRelation={this.handleRemoveRelation}
            handleDisease={this.handleDisease}
            handleMedicalQuestionResponse={this.handleMedicalQuestionResponse}
            handleMedicalQuestionExplanation={this.handleMedicalQuestionExplanation}
            saveValues={this.saveValues}
            onInputChange={this.handleInputChange}
            nextStep={this.nextStep}
            previousStep={this.previousStep}></MedicalHistory>);
      case 3:
        return <Contract fieldData={demographicData}
                         nextStep={this.nextStep}
                         previousStep={this.previousStep}
                         saveValues={this.saveValues}/>
      case 4:
        return <Summary demographicData={demographicData}
                        medicalHistory={medicalHistory}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues}/>
      case 5:
        return <Submit fieldData={demographicData}
                       previousStep={this.previousStep}
                       submitRegistration={this.submitRegistration}/>
    }
  }

  render() {
    const style = {
      center: {
        alignItems: 'center'
      },
      prog: {width: (this.state.step / 5 * 100) + '%'}
    };
    return (
        <main style={style.center}>
          <h4>
            <span className="progress-step">Step {this.state.step}</span>
          </h4>
          <br/>
          <progress className="progress" style={style.prog}></progress>
          {this.showStep()}
        </main>
    );
  }
}

Main.defaultProps = {
  showNavigation: true
};

Main.propTypes = propTypes;
