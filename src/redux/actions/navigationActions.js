import {fetchWeatherData} from "../../utils/axios";

export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

export const TOGGLE_UNIT = 'TOGGLE_UNIT';

export const setSeachValue = value => ({
  value,
  type: SET_SEARCH_VALUE
})

export const toggleUnit = () => ({
  type: TOGGLE_UNIT
})
