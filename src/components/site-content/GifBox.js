import React, { useState, useEffect } from 'react';

const randomNumber = () => {
	return Math.floor(Math.random() * 25);
};

const GifBox = (props) => {
	const [gif, setGif] = useState('');

	const [pending, setPending] = useState(true);

	const getGif = async (term) => {
		try {
			const response = await fetch(
				`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=FGcKWs04zti40C9Hyhxu4CRPtL7bADFx`,
				{ mode: 'cors' },
			);
			const json = await response.json();

			setGif(json.data[randomNumber()].images.original.url);
		} catch (error) {
			console.log('problem with gif');
		}
	};

	useEffect(() => {
		if (
			props.gif === 'hot summer' ||
			props.gif === 'freezing' ||
			props.gif === 'chilling'
		) {
			console.log(props.gif);
			getGif(props.gif);
			setPending(false);
		}
	}, [props.gif]);

	if (gif) {
		return <img src={gif} className="img-fluid gif" alt="some-gif" />;
	}
	if (pending) {
		return (
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ height: '15em' }}></div>
		);
	}
	return (
		<div
			className="d-flex align-items-center justify-content-center"
			style={{ height: '15em' }}>
			<div className="spinner-border " role="status"></div>
		</div>
	);
};

export default GifBox;
