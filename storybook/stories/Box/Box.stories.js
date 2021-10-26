import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Box from '../../../src/Box';
import CenterView from '../CenterView';

storiesOf('Box', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('just box', () => <Box />);
