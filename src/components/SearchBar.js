import React from 'react';

class SearchBar extends React.Component {
	state = { value: '' };

	handleInput = (e) => {
		this.setState({ value: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.submit(this.state.value);
	};

	render() {
		return (
			<div className="row search-row mt-5 mb-5 justify-content-center ">
				<div className="col-auto">
					<form onSubmit={this.handleSubmit}>
						<div className="form-row align-items-center justify-content-center">
							<div className="col-auto">
								<input
									type="text"
									className="form-control mb-2"
									placeholder="Moscu..."
									onChange={this.handleInput}
									value={this.state.value}
									required
								/>
							</div>

							<div className="col-auto">
								<button type="submit" className="btn btn-primary mb-2">
									Search
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchBar;
