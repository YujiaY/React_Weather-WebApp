import React from 'react';
import {connect} from "react-redux";
import {changeLimitAction} from "../redux/actions/weatherActions"

import {format} from 'date-fns';

import ForecastRow from './ForecastRow';

class WeatherForecast extends React.Component{

  render() {
    const {limit, changeLimit, unit, forecasts } = this.props;
    const forecastsLimited = forecasts.slice(0, limit);
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button
            className={`forecast__switch_0 ${limit === 5 ? 'switch-active' : ''}`}
            onClick={() => changeLimit(5)}
          >
            5 items
          </button>
          <button
            className={`forecast__switch_1 ${limit === 10 ? 'switch-active' : ''}`}
            onClick={() => changeLimit(10)}
          >
            10 items
          </button>
        </div>
        {
          forecastsLimited.map( i => {
            const date = new Date(i.time * 1000);
            const day = format(date, 'EEE');
            const time = format(date, 'HH:mm');
            const high = unit === 'C' ? i.maxCelsius : i.maxFahrenheit
            const low = unit === 'C' ? i.minCelsius : i.minFahrenheit

            return (
              <ForecastRow
                unit = {unit}
                key = {forecastsLimited.indexOf(i)}
                day = {day}
                high = {high}
                low = {low}
                time ={time}
                test = {forecastsLimited.indexOf(i) + 1}
              />)
          })
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  limit: state.weatherRdc.limit,
  forecasts: state.weatherRdc.forecasts,
  unit: state.navigationRdc.unit
})

const mapDispatchToProps = dispatch => ({
  changeLimit: limit => dispatch(changeLimitAction(limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);
