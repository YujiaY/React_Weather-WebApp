import React from 'react';

import compass from '../assets/icons/icon-compass.png';
import umberella from '../assets/icons/icon-umberella.png';
import wind from '../assets/icons/icon-wind.png';

function WeatherCondition(props) {
  const max = props.unit === 'C' ? props.current.maxCelsius: props.current.maxFahrenheit;
  const unit = props.unit === 'C' ? 'C' : 'F';
  return (
		<section className="weather-condition">
			<div className="weather-condition__location">{props.cityName}</div>
			<div className="weather-condition__temp">
        {max} {unit}
      </div>
			<div className="weather-condition__desc">
				<div>
					<img src={umberella} />
					<span className="citem">{props.current.humidity}%</span>
				</div>
				<div>
					<img src={wind} />
					<span className="citem">{props.current.windSpeed} km/h</span>
				</div>
				<div>
					<img src={compass} />
					<span className="citem">{props.current.windDirection}</span>
				</div>
			</div>
		</section>
	);
}

export default WeatherCondition;
