import React, { useState } from 'react';

const SearchBar = (props) => {
	const [value, setValue] = useState('');
	const [sended, setSended] = useState('');

	const handleInput = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value !== sended) {
			props.submit(value);
		}
		setSended(value);
	};

	return (
		<div className="row search-row mt-5 mb-5 justify-content-center ">
			<div className="col-auto">
				<form onSubmit={handleSubmit}>
					<div className="form-row align-items-center justify-content-center">
						<div className="col-auto">
							<input
								type="text"
								className="form-control mb-2"
								placeholder="Moscu..."
								onChange={handleInput}
								value={value}
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
};

export default SearchBar;
