import type { Meta, StoryObj } from '@storybook/web-components'
import type { InputProps } from './Input'
import { Input } from './Input'

const meta = {
  title: 'Example/Input',
  tags: ['autodocs'],
  render: (args) => Input(args),
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onChange: { action: 'onChange' },
  },
} satisfies Meta<InputProps>

export default meta
type Story = StoryObj<InputProps>

export const Large: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    size: 'large',
  },
}

export const medium: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    size: 'small',
  },
}
