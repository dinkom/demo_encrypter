import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import InputWithMessage from './InputWithMessage.js';

const stories = storiesOf('InputWithMessage', module);

stories.add('default InputWithMessage', () => {
  return <InputWithMessage />;
});

stories.add('InputWithMessage with update function', () => {
  return <InputWithMessage update={action('input field changed')} />;
});
