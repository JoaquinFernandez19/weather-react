import React, { useState, useEffect } from 'react';

//Content
import GifBox from './site-content/GifBox';
import Weather from './site-content/Weather';

// helper functions
const KtoC = (data) => {
	let temp = data.main.temp;
	return Math.floor(temp - 273);
};
const meterPerSecondToKmPerHour = (data) => {
	let speed = data.wind.speed;
	return Math.floor(speed * 3.6);
};

//
const Content = (props) => {
	const [city, setCity] = useState('');
	const [data, setData] = useState('');
	const [gifSeason, setGifSeason] = useState('');

	const getWeather = async (argumentCity) => {
		try {
			let response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${argumentCity}&APPID=45b8a5fd049781c6a9430490973be29b`,
				{ mode: 'cors' },
			);

			let data = await response.json();

			let season;

			if (KtoC(data) >= 25) {
				season = 'hot summer';
			} else if (KtoC(data) <= 16) {
				season = 'freezing';
			} else {
				season = 'chilling';
			}
			setCity(argumentCity);
			setData({
				city: argumentCity,
				temp: KtoC(data),
				wind: meterPerSecondToKmPerHour(data),
				humidity: data.main.humidity,
				general: data.weather[0].description,
				clouds: data.clouds.all,
				iconInfo: data.weather[0].icon,
			});
			setGifSeason(season);
		} catch (error) {
			alert('Error, wrong city');
		}
	};

	useEffect(() => {
		if (props.city !== city) {
			getWeather(props.city);
		}
	});

	return (
		<div className="container">
			<div className="row justify-content-center mt-5 row">
				<div className="col-md-8 col-xs-12 text-center">
					<Weather data={data} />
					<GifBox gif={gifSeason} />
				</div>
			</div>
		</div>
	);
};

export default Content;
