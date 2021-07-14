import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateScreen } from '../CreateScreen';
import { FakeNetworkProvider } from '../FakeNetworkProvider';

export default {
  title: 'CreateScreen',
  component: CreateScreen,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <FakeNetworkProvider>
        <Story />
      </FakeNetworkProvider>
    )
  ]
} as ComponentMeta<typeof CreateScreen>;

const Template: ComponentStory<typeof CreateScreen> = (args) => <CreateScreen {...args} />;

export const Primary = Template.bind({});
Primary.args = {
}