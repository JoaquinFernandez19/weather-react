import React from 'react';

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
class Content extends React.Component {
	state = { city: null };

	getWeather = async (city) => {
		try {
			let response = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=45b8a5fd049781c6a9430490973be29b`,
				{ mode: 'cors' },
			);

			let data = await response.json();

			let season;

			if (KtoC(data) >= 24) {
				season = 'hot summer';
			} else if (KtoC(data) <= 15) {
				season = 'freezing';
			} else {
				season = 'weather reporter';
			}

			this.setState({
				temp: KtoC(data),
				wind: meterPerSecondToKmPerHour(data),
				humidity: data.main.humidity,
				general: data.weather[0].description,
				city: city,
				gifSeason: season,
			});
		} catch (error) {
			alert('Error, wrong city');
		}
	};

	componentDidMount() {
		if (this.props.city) {
			this.getWeather(this.props.city);
		}
	}

	componentDidUpdate(prevProp) {
		if (prevProp !== this.props) {
			this.getWeather(this.props.city);
		}
	}

	render() {
		return (
			<div className="row justify-content-center mt-5">
				<div className="col-md-8 col-xs-12 text-center">
					<Weather data={this.state} />
					<GifBox gif={this.state.gifSeason} />
				</div>
			</div>
		);
	}
}

export default Content;
