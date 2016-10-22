import React, { PropTypes } from 'react';
import 'jquery';
import 'bootstrap-jquery';

export default class Message extends React.Component {
	render() {
		return (
			<p className={this.props.classNames}>{this.props.children}</p>
		);
	}
}

Message.propTypes = {
	classNames: PropTypes.string
};
