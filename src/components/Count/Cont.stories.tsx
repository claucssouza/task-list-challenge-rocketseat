import type { Meta, StoryObj } from '@storybook/react';
import { Count } from './Count';

const meta = {
  title: 'components/Count',
  component: Count, 
} satisfies Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CountStory: Story = {
    args: {
        textCount: '2 de 10'
    }
};
