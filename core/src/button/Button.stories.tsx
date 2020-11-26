import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import { Button } from './button'

storiesOf('Button', module)
  .add('Primary', () => (
    <Button>Submit</Button>
  ))
