import React from 'react';
import './styles/App.scss';
//Components

import SearchBar from './SearchBar';
import Header from './Header';
import Content from './Content';

//kelvin to celsius helper function

class App extends React.Component {
	state = { city: '' };

	citySave = (city) => {
		this.setState({ city: city });
	};

	render() {
		return (
			<div className="container">
				<Header text="Joaquin Weather" icon="heart outline" />
				<SearchBar
					placeholder="Write a location..."
					btnText="Search"
					submit={this.citySave}
				/>
				<Content city={this.state.city} />
			</div>
		);
	}
}

export default App;
