import React from 'react';

import {format} from 'date-fns';

import ForecastRow from './ForecastRow';

class WeatherForecast extends React.Component{
	// constructor(props) {
	//   super(props);
  //
	//   this.state = {
  //   }
  // };

  render() {
    const {itemLimit} = this.props;
    const forecasts = this.props.forecasts.slice(0, itemLimit);
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button
            className={`forecast__switch_0 ${itemLimit === 5 ? 'switch-active' : ''}`}
            onClick={() => this.props.changeLimit(5)}
          >
            5 items
          </button>
          <button
            className={`forecast__switch_1 ${itemLimit === 10 ? 'switch-active' : ''}`}
            onClick={() => this.props.changeLimit(10)}
          >
            10 items
          </button>
        </div>
        {
          forecasts.map( i => {
            const date = new Date(i.time * 1000);
            const day = format(date, 'EEE');
            const time = format(date, 'HH:mm');
            const high = this.props.unit === 'C' ? i.maxCelsius : i.maxFahrenheit
            const low = this.props.unit === 'C' ? i.minCelsius : i.minFahrenheit

            return (
              <ForecastRow
                unit = {this.props.unit}
                key = {forecasts.indexOf(i)}
                day = {day}
                high = {high}
                low = {low}
                time ={time}
                test = {this.props.forecasts.indexOf(i) + 1}
              />)
          })
          // <ForecastRow
            //   key = {this.props.forecasts.indexOf(i)}
            //   day = {i.day}
            //   high = {i.high}
            //   low = { i.low}
            //   time = {i.time}
            //   test = {this.props.forecasts.indexOf(i)}
            // />
        }
      </section>
    );
  }
}

export default WeatherForecast;
