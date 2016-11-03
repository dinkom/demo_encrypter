import React from 'react';

import Input from '../atoms/Input.js';
import Message from '../atoms/Message.js';

export default class InputWithMessage extends React.Component {
  render() {
    const {
      inputClasses,
      messageClasses,
      type,
      update,
      message
    } = this.props;

    return (
      <div>
        <Input
          classNames={inputClasses}
          ref='inp'
          type={type}
          update={update}
        />
        <br /><br />
        <Message classNames={messageClasses}>{message}</Message>
      </div>
    );
  }
}
