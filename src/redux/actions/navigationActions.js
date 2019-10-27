import {fetchWeatherData} from "../../utils/axios";

import {
  fetchData,
  fetchDataSuccess,
  fetchDataFailure
} from "./weatherActions";

export const TOGGLE_UNIT = 'TOGGLE_UNIT';

export const SET_SEARCH_INPUT_VALUE = 'SET_SEARCH_INPUT_VALUE';

export const toggleUnit = () => ({
  type: TOGGLE_UNIT
})

export const setSearchInputValue = searchString => ({
  searchString,
  type: SET_SEARCH_INPUT_VALUE
})

export const submitSearch = city => (dispatch, getState) => {
  dispatch(fetchData());

  return fetchWeatherData(city)
    .then(data => dispatch(fetchDataSuccess(data)))
    .catch(err => dispatch(fetchDataFailure(err)))
}

