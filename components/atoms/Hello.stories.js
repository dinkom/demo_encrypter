import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Hello from './Hello.js';

const stories = storiesOf('Hello', module);

stories.add('default Hello', () => {
  return <Hello />;
});

stories.add('Hello with custom text', () => {
  return <Hello text={'Hi there!'} />;
});
