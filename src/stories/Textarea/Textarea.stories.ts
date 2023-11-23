import type { Meta, StoryObj } from '@storybook/web-components'
import type { TextareaProps } from './Textarea'
import { Textarea } from './Textarea'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Example/Textarea',
  tags: ['autodocs'],
  render: (args) => Textarea(args),
  argTypes: {
    onChange: { action: 'onChange' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  component: 'my-button',
} satisfies Meta<TextareaProps>

export default meta
type Story = StoryObj<TextareaProps>

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    placeholder: '텍스트를 입력하세요',
    value: '입력한 텍스트',
  },
}

export const Secondary: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
    value: '입력한 텍스트',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: '텍스트를 입력하세요',
    value: '입력한 텍스트',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: '텍스트를 입력하세요',
    value: '입력한 텍스트',
  },
}
