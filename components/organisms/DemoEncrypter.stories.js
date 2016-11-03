import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import DemoEncrypter from './DemoEncrypter.js';

const stories = storiesOf('DemoEncrypter', module);

stories.add('default DemoEncrypter', () => {
  return <DemoEncrypter />;
});
