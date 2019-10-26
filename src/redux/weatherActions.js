import {fetchWeatherData} from '../utils/axios';
export const CHANGE_LIMIT = 'CHANGE_LIMIT';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const changeLimitAction = limit => ({
  limit,
  type: CHANGE_LIMIT,
});

export const fetchData = () => ({
  type: FETCH_DATA,
});


export const fetchDataSuccess = data => ({
  data,
  type: FETCH_DATA_SUCCESS
});

export const fetchDataFailure = err => ({
  error: err,
  type: FETCH_DATA_FAILURE
});

export const fetchDataThunkAction = city => dispatch => {
  dispatch(fetchData());
  fetchWeatherData(city).then(data => {
    dispatch(fetchDataSuccess(data));
  }).catch(err => {
    dispatch(fetchDataFailure(err));
  });

}
