import React from 'react';
import {connect} from 'react-redux';

import compass from '../assets/icons/icon-compass.png';
import umberella from '../assets/icons/icon-umberella.png';
import wind from '../assets/icons/icon-wind.png';

function WeatherCondition(props) {
  const {
    cityName,
    current: {
      maxCelsius,
      maxFahrenheit,
      humidity,
      windSpeed,
      windDirection
    },
    unit
  } = props;
  return (
		<section className="weather-condition">
			<div className="weather-condition__location">{cityName}</div>
			<div className="weather-condition__temp">
        {unit === 'C' ? maxCelsius : maxFahrenheit} {unit}
      </div>
			<div className="weather-condition__desc">
				<div>
					<img src={umberella} />
					<span className="citem">{humidity}%</span>
				</div>
				<div>
					<img src={wind} />
					<span className="citem">{windSpeed} km/h</span>
				</div>
				<div>
					<img src={compass} />
					<span className="citem">{windDirection}</span>
				</div>
			</div>
		</section>
	);
}

const mapStateToPrps = state => ({
  cityName: state.weatherRdc.cityName,
  current: state.weatherRdc.current
})

export default connect(mapStateToPrps)(WeatherCondition);
