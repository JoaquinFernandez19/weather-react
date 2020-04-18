import React from 'react';

//Content
import GifBox from './site-content/GifBox';
import Weather from './site-content/Weather';

class Content extends React.Component {
	state = {};
	render() {
		return (
			<div className="row justify-content-center mt-5 text-center">
				<div className="weather-style col-md-6 col-xs-12">
					<Weather weather="sunny" />
				</div>
				<div className="gif-style col-md-4 col-xs-12">
					<GifBox gif="error no gif :U" />
				</div>
			</div>
		);
	}
}

export default Content;
