import React from 'react';


import ForecastRow from './ForecastRow';

class WeatherForecast extends React.Component{
	constructor(props) {
	  super(props);

	  this.state = {
    }
  };




  render() {
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button
            className={`forecast__switch_0 ${this.props.itemLimit === 5 ? 'switch-active' : ''}`}
            onClick={() => this.props.changeLimit(5)}
          >
            5 items
          </button>
          <button
            className={`forecast__switch_1 ${this.props.itemLimit === 10 ? 'switch-active' : ''}`}
            onClick={() => this.props.changeLimit(10)}
          >
            10 items
          </button>
        </div>
        {
          this.props.forecasts.map( i => (
            <ForecastRow
              key = {this.props.forecasts.indexOf(i)}
              day = {i.day}
              high = {i.high}
              low = { i.low}
              time = {i.time}
              test = {this.props.forecasts.indexOf(i)}
            />
          ))
        }
      </section>
    );
  }
}

export default WeatherForecast;
