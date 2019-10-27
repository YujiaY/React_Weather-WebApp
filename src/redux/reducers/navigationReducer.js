import {TOGGLE_UNIT} from "../actions/navigationActions";

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

    default:
      return state;

  }

};

export default navigationReducer;
