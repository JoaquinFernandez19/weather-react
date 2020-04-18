import React from 'react';

const Header = (props) => {
	return (
		<div className="row header-row header-bar">
			<div className="col text-center">
				<h2>
					{props.text}
					<i className={`icon ${props.icon}`}></i>
				</h2>
			</div>
		</div>
	);
};

export default Header;
