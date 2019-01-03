import { combineReducers } from 'redux';
import { reducer as reduxFrom } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
    
    auth: authReducer,
    form: reduxFrom,
    surveys: surveysReducer

});