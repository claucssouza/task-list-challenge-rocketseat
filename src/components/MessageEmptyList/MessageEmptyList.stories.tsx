import type { Meta, StoryObj } from '@storybook/react';
import { MessageEmptyList } from './MessageEmptyList';

const meta = {
  title: 'components/MessageEmptyList',
  component: MessageEmptyList, 
} satisfies Meta<typeof MessageEmptyList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageEmptyListStory: Story = {};
