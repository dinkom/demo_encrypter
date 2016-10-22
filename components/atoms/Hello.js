import React, { PropTypes } from 'react';
import 'jquery';
import 'bootstrap-jquery';

export default class Hello extends React.Component {
		render() {
			return (
				<div><h2>{this.props.text}</h2><hr /></div>
			);
		}
}

Hello.propTypes = {
	text: PropTypes.string
};

Hello.defaultProps = {
	text: "Hello, World!"
};
