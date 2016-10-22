import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Message from './Message.js';

const stories = storiesOf('Message', module);

stories.add('default Message', () => {
  return <Message />;
});

stories.add('Message with text', () => {
  return <Message>Random message text</Message>;
});
