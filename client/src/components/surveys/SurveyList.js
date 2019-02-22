import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (

                <div key={survey._id} className="card darken-1 white-text">
                    <div className="card-content">
                        <span className="card-title"> {survey.title} </span>
                        <p> {survey.body} </p>
                        <p className="right ">
                            Sent on: { new Date(survey.dateSent).toLocaleDateString() } 
                        </p>
                    </div>
                <div className="card-action">
                    <a>Yes: {survey.yes}  </a>
                    <a>No: {survey.no}  </a>
                    <a href="#" onClick={() => this.props.deleteSurvey(survey._id)} className="right">Delete</a>
                </div>
                </div>

            );
        })
    }

  render() {
    return (
      <div>

        { this.renderSurveys() }

      </div>
    )
  }
}

const mapStateToProps = ({ surveys }) => ({ surveys });


export default connect(mapStateToProps, {fetchSurveys, deleteSurvey})(SurveyList)
