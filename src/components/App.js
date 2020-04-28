import React, { useState } from 'react';
import './styles/App.scss';
//Components

import SearchBar from './SearchBar';
import Header from './Header';
import Content from './Content';

//kelvin to celsius helper function

const App = () => {
	const [city, setCity] = useState('');

	const citySave = (city) => {
		setCity(city);
	};

	return (
		<div className="container-fluid">
			<Header text="Joaquin Weather" />
			<SearchBar
				placeholder="Write a location..."
				btnText="Search"
				submit={citySave}
			/>
			<Content city={city} />
		</div>
	);
};

export default App;
