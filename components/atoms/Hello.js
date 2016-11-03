import React, { PropTypes } from 'react';

const Hello = (props) => {
	return (
		<div><h2>{props.text}</h2><hr /></div>
	);
}

Hello.propTypes = {
	text: PropTypes.string
};

Hello.defaultProps = {
	text: "Hello, World!"
};

export default Hello;
