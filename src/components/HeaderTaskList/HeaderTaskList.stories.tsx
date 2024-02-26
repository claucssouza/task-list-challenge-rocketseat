import type { Meta, StoryObj } from '@storybook/react';
import { HeaderTaskList } from './HeaderTaskList';

const meta = {
  title: 'components/HeaderTaskList',
  component: HeaderTaskList, 
} satisfies Meta<typeof HeaderTaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderTaskListStory: Story = {};