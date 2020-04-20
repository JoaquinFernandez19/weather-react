import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTint, faCloud } from '@fortawesome/free-solid-svg-icons';

class Weather extends React.Component {
	state = { pending: true };

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.setState({
				temp: this.props.data.temp,
				wind: this.props.data.wind,
				general: this.props.data.general,
				city: this.props.data.city,
				humidity: this.props.data.humidity,
				clouds: this.props.data.clouds,
				icon: this.props.data.iconInfo,
				pending: false,
			});
		}
	}

	render() {
		if (this.state.city) {
			return (
				<div className="container w-100 weather-content-style mb-4">
					<div className="row justify-content-around">
						<div className="col-auto text-wrap">
							<h1 className="city-style">{this.state.city}</h1>
							<p>{this.state.general}</p>
							<img
								src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
								alt=""
							/>
						</div>
						<div className="col-sm-3">
							<h1 className="temp-style">{this.state.temp} °C</h1>
							<p>
								<FontAwesomeIcon icon={faWind} /> {this.state.wind}
								<span style={{ fontSize: '10px' }}>km/h</span>
							</p>
							<p>
								<FontAwesomeIcon icon={faTint} /> {this.state.humidity}%
							</p>
							<p>
								<FontAwesomeIcon icon={faCloud} /> {this.state.clouds}%
							</p>
						</div>
					</div>
				</div>
			);
		}
		if (this.state.pending) {
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
	}
}

export default Weather;
