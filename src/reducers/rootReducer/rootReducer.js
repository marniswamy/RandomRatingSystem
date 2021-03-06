import { combineReducers } from 'redux';
import { dashboardReducer } from '../dashboardReducer';

/**
 * A small description explaining where this function is used and why
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - the payload of the action this reducer is attached to
 * @returns {*} the next Redux state
 */
export const rootReducer = combineReducers({
  dashboardReducer
});


