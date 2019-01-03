import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
      return _.map(formFields, ({ label, name }) => {
        return (
          
        <Field
        key={name} 
        component={SurveyField} 
        type="text"
        label={label} 
        name={name}
        />
        )
      });
  }
  render() {
    return (
      <div>
        <h4 className="center">New Survey</h4>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>

          {this.renderFields()}

        <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
        <button type="submit" className="indigo btn-flat right white-text">
          Next
          <i className="material-icons right">arrow_right</i>
        </button>
        </form>

      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'You must provide a title'
  }
  if(!values.subject) {
    errors.subject = 'You must provide a subject'
  }
  if(!values.body) {
    errors.body = 'You must provide a body'
  }

  errors.recipients = validateEmails(values.recipients || '');

  if(!values.recipients) {
    errors.recipients = 'You must provide some emails';
  }


  return errors;
};

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
