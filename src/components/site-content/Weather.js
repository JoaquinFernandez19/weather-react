import React from 'react';

class Weather extends React.Component {
	state = {};

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.setState({
				temp: this.props.data.temp,
				wind: this.props.data.wind,
				general: this.props.data.general,
				city: this.props.data.city,
				humidity: this.props.data.humidity,
			});
		}
	}

	render() {
		if (this.state.city) {
			return (
				<div className="container w-100 weather-content-style mb-4">
					<h2>{this.state.city}</h2>
					<p>{this.state.temp}°C</p>
					<p>{this.state.general}</p>
					<p>Windspeed {this.state.wind}km/h</p>
					<p>Humidity {this.state.humidity}%</p>
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
	}
}

export default Weather;
