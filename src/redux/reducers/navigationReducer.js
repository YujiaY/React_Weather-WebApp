import {TOGGLE_UNIT, SET_SEARCH_INPUT_VALUE} from "../actions/navigationActions";

const initialState = {
  unit: 'C',
  searchString: ''
}

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_UNIT:
      const newUnit = state.unit === 'C' ? 'F' : 'C';
      return {
        ...state,
        unit: newUnit
      };

    case SET_SEARCH_INPUT_VALUE:
      return {
        ...state,
        searchString: action.searchString
      }

    default:
      return state;

  }

};

export default navigationReducer;
