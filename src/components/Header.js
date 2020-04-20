import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
	return (
		<div className="row header-row header-bar mb-5 ">
			<div className="col text-center">
				<h2>
					{props.text}
					<FontAwesomeIcon icon={faBolt} style={{ marginLeft: '10px' }} />
				</h2>
			</div>
		</div>
	);
};

export default Header;
