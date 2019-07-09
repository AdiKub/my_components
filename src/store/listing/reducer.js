import { initialState } from './selectors.js';
import * as actionTypes from './actionTypes.js';

export default (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.CREATE_LISTING_SUCCESS:
        return {
          ...state,
          createListing: action.response,
        };
      default:
        return state;
    }
  };