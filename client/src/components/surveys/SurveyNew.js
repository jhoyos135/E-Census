import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './surveyFromReview';

class SurveyNew extends Component {

  state = { showFormReview: false };

  renderContent() {
    if(this.state.showFormReview === true) {
      return (

      <SurveyFormReview
        onCancel={() => {
          this.setState({ showFormReview: false})
        }}
       />

      )
    }
      return (

      <SurveyForm 
      onSurveySubmit={ () => this.setState({ showFormReview: true }) } />

      );
    
  }

  render() {
    return (
      <div className="container">
          { this.renderContent() }
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)
