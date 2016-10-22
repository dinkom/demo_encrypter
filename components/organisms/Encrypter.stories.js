import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Encrypter from './Encrypter.js';

const stories = storiesOf('Encrypter', module);

stories.add('default Encrypter', () => {
  return <Encrypter />;
});
