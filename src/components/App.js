import React from 'react';
import './styles/App.scss';
//Components

import SearchBar from './SearchBar';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
	state = {};

	render() {
		return (
			<div className="container-fluid ">
				<Header text="Joaquin Weather" icon="heart outline" />
				<SearchBar placeholder="Write a location..." btnText="Search" />
				<Content />
			</div>
		);
	}
}

export default App;
