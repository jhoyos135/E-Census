import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label> {label} </label>
        <div>
          { formValues[name] }
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5 className="center">Please confirm your entries</h5>

      {reviewFields}

      <br />
      <button
      className="indigo lighten-1 btn-flat white-text"
      onClick={onCancel}
      >
      Back
      </button>

      <button 
      onClick={ () => submitSurvey(formValues, history)}
      className="pink btn-flat right white-text">
        Send
        <i className="material-icons right">email</i>
      </button>

    </div>
  )
}

function mapStateToProps(state) {
return {

    formValues: state.form.surveyForm.values

}
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
