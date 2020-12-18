// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Tooltip } from './tooltip';

// This default export determines where your story goes in the story list
export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      name: 'children',
      type: { name: 'object', required: true },
      defaultValue: <a href="#">Test</a>,
      description: 'children',
      table: {
        type: { summary: 'nodeElement' },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: 'object'
      }
    },
  }
};

const Template: Story<ComponentProps<typeof Tooltip>> = (args) => (
  <Tooltip {...args}>{args.children}</Tooltip>
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  content: "This is test"
};