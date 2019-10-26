import {CHANGE_LIMIT, FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from './weatherActions';

const initialState = {
  limit: 5,
  forecasts: [],
  current: {},
  cityName: '',
  isLoading: false,
  error: null,


}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case  CHANGE_LIMIT:
      return ({
        ...state,
        limit: action.limit
      });

    case FETCH_DATA:
      return ({
        ...state,
        isLoading: true,
      })

    case FETCH_DATA_SUCCESS:
      const data = action.data.data.data;
      const forecasts = data.forecast.slice(0, 10);
      const current =data.current;
      const cityName = data.city.name;
      return ({
        ...state,
        isLoading: false,
        forecasts,
        current,
        cityName
      });

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }


    default:
      return state;

  }
}

export default weatherReducer;
