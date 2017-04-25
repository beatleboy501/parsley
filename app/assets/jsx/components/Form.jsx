import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Input.jsx'
import Button from './Button.jsx'

const propTypes = {
  formName: React.PropTypes.string,
  inputs: React.PropTypes.shape
};

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h1>{this.props.formName}</h1>
          {this.props.inputs.map((input) => (
              <div className={input.classNames}>
                <Input type={input.type} valChange={input.valChange} val={input.val}></Input>
              </div>
          ))}
          <Button></Button>
        </div>
    );
  }
}

Form.propTypes = propTypes;
