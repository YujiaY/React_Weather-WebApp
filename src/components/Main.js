import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

function Main(props) {

	return (
		<main>
			<WeatherCondition
        cityName = {props.cityName}
        current = {props.current}
        unit = {props.unit}
      />
			<WeatherForecast
        forecasts = {props.forecasts}
        changeLimit = {props.changeLimit}
        itemLimit = {props.itemLimit}
        unit = {props.unit}
      />
		</main>
	);
}

export default Main;
