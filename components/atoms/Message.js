import React, { PropTypes } from 'react';
import 'jquery';
import 'bootstrap-jquery';

const Message = (props) => {
	return (
		<p className={props.classNames}>{props.children}</p>
	);
}

Message.propTypes = {
	classNames: PropTypes.string
};

export default Message;
