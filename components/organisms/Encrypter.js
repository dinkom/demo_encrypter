import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CryptoJS from 'crypto-js';
import 'jquery';
import 'bootstrap-jquery';

import Hello from '../atoms/Hello.js';
import InputWithMessage from '../molecules/InputWithMessage.js';

import '../../css/bootstrap.min.css';

export default class Encrypter extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = { 'encrypted': '' };
	}

	update() {
		const value = ReactDOM.findDOMNode(this.refs.iwm.refs.inp.refs.val).value;

		if (value) {
			this.setState({
				'encrypted': CryptoJS.SHA256(value).toString(CryptoJS.enc.Hex)
			});
		}
		else {
			this.setState({ 'encrypted': '' });
		}
	}

	render() {
		return (
			<div className='container'>
				<Hello text={'Hello JavaScript Zagreb'} />
				<InputWithMessage
					ref='iwm'
					inputClasses='form-control'
					messageClasses='lead'
					type='text'
					update={this.update}
					message={this.state.encrypted}
				/>
			</div>
		);
	}
}
