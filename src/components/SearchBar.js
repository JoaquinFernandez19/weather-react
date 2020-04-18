import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="row search-row mt-5">
				<div className="col-sm-4 offset-sm-4">
					<div className="input-group input-group-md mb-3">
						<input
							type="text"
							className="form-control"
							placeholder={this.props.placeholder}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-primary"
								type="button"
								style={{ backgroundColor: '#00e0ff', border: '#74f9ff' }}>
								{this.props.btnText}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;
