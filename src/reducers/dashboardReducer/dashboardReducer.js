import { initialState } from '../../initialState/initialState'

/**
 * A small description explaining where this function is used and why
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - the payload of the action this reducer is attached to
 * @returns {*} the next Redux state
 */
export const dashboardReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case "DUMMY":
      return state;

    default:
      return state;
  }
};
