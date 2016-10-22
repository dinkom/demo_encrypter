import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Input from './Input.js';

const stories = storiesOf('Input', module);

stories.add('default Input', () => {
  return <Input />;
});

stories.add('Input with update function', () => {
  return <Input update={action('input field changed')} />;
});
