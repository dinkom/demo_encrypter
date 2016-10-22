import React, { PropTypes } from 'react';
import 'jquery';
import 'bootstrap-jquery';

export default class Input extends React.Component {
	render() {
		return (
			<input
				ref="val"
				className={this.props.classNames}
				type={this.props.type}
				onChange={this.props.update}
			/>
		);
	}
}

Input.propTypes = {
	classNames: PropTypes.string,
	type: PropTypes.string,
	update: PropTypes.func
};

Input.defaultProps = {
	type: 'text',
	update: () => {}
};
