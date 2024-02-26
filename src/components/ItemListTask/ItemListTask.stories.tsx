import type { Meta, StoryObj } from '@storybook/react';
import { ItemListTask } from './ItemListTask';

const meta = {
  title: 'components/ItemListTask',
  component: ItemListTask, 
} satisfies Meta<typeof ItemListTask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const itemListTaskStory: Story = {};



