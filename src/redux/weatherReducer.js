import {CHANGE_LIMIT} from './weatherActions';

const initialState = {
  limit: 5,

}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case  CHANGE_LIMIT:
      return ({
        ...state,
        limit: action.limit
      })
    default:
      return state;

  }
}
