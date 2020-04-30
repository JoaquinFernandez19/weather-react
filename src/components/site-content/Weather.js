import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTint, faCloud } from '@fortawesome/free-solid-svg-icons';

const Weather = (props) => {
	const [pending, setPending] = useState(true);
	const [weather, setWeather] = useState('');

	useEffect(() => {
		if (props.data.temp) {
			setPending(false);
		}
		setWeather({
			icon: props.data.iconInfo,
			temp: props.data.temp,
			wind: props.data.wind,
			general: props.data.general,
			city: props.data.city,
			humidty: props.data.humidity,
			clouds: props.data.clouds,
			props: props.data.iconInfo,
		});
	}, [props.data]);

	if (weather.city) {
		return (
			<div className="container w-100 weather-content-style mb-4">
				<div className="row justify-content-around">
					<div className="col-auto text-wrap">
						<h1 className="city-style">{weather.city}</h1>
						<p>{weather.general}</p>
						<img
							src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
							alt=""
						/>
					</div>
					<div className="col-sm-3">
						<h1 className="temp-style">{weather.temp} °C</h1>
						<p>
							<FontAwesomeIcon icon={faWind} /> {weather.wind}
							<span style={{ fontSize: '10px' }}>km/h</span>
						</p>
						<p>
							<FontAwesomeIcon icon={faTint} /> {weather.humidity}%
						</p>
						<p>
							<FontAwesomeIcon icon={faCloud} /> {weather.clouds}%
						</p>
					</div>
				</div>
			</div>
		);
	}
	if (pending) {
		return (
			<div
				className="container w-100 weather-content-style mb-4 d-flex align-items-center justify-content-center"
				style={{ height: '15em' }}>
				<h2>Write a city to get the weather</h2>
			</div>
		);
	}
	return (
		<div
			className="container w-100 weather-content-style mb-4 d-flex align-items-center justify-content-center"
			style={{ height: '15em' }}>
			<div className="spinner-border " role="status"></div>
		</div>
	);
};

export default Weather;
