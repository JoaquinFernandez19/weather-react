import React from 'react';

const randomNumber = () => {
	return Math.floor(Math.random() * 25);
};

class GifBox extends React.Component {
	state = { gif: null, season: '', pending: true };

	getGif = async (term) => {
		try {
			const response = await fetch(
				`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=FGcKWs04zti40C9Hyhxu4CRPtL7bADFx`,
				{ mode: 'cors' },
			);
			const json = await response.json();
			this.setState({
				gif: json.data[randomNumber()].images.original.url,
			});
		} catch (error) {
			console.log('problem with gif');
		}
	};

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			if (
				this.props.gif === 'hot summer' ||
				this.props.gif === 'freezing' ||
				this.props.gif === 'chilling'
			) {
				this.getGif(this.props.gif);
				this.setState({ pending: false });
			}
		}
	}
	render() {
		if (this.state.gif) {
			return <img src={this.state.gif} className="img-fluid gif" />;
		}
		if (this.state.pending) {
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
	}
}

export default GifBox;
