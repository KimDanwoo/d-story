import { html } from 'lit'
import { Meta, StoryObj } from '@storybook/web-components'
import './index'
import { ColProps } from './index'

const meta = {
  title: 'Components/Col',
  tags: ['autodocs'],
  render: (args: ColProps) =>
    html`<base-col items=${args.items || 'start'} content=${args.content || 'between'}>
      <p>1번 항목</p>
      <p>2번 항목</p>
      <p>3번 항목</p>
    </base-col>`,
  argTypes: {
    items: {
      control: { type: 'select' },
      options: ['center', 'start', 'end'],
    },
    content: {
      control: { type: 'select' },
      options: ['center', 'start', 'end', 'between', 'around', 'evenly'],
    },
  },
} satisfies Meta<ColProps>

export default meta
type Story = StoryObj<ColProps>

export const Default: Story = {
  args: {
    items: 'center',
    content: 'around',
  },
}
export const Primary: Story = {
  args: {},
}
