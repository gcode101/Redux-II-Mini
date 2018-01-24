import { FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS } '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, String fetching, String fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    case FETCHING_CHARS:
    	return {...state, fetching: true};
    case CHARS_RECEIVED:
    	return {
    		...state,
    		fetched: true,
    		fetching: false,
    		chars: Object.keys(action.payload)
    	}
    case ERROR_FETCHING_CHARS:
    	return { ...state, fetching: false, error action.payload }
    // action types should be FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
