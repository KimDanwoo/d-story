import { html } from 'lit'
import { Meta, StoryObj } from '@storybook/web-components'
import './row'
import { RowProps } from './row'

const meta = {
  title: 'Components/Row',
  tags: ['autodocs'],
  render: (args: RowProps) =>
    html`<base-row content=${args.content || 'start'}>
      <p>1번 항목</p>
      <p>2번 항목</p>
      <p>3번 항목</p>
    </base-row>`,
  argTypes: {
    content: {
      control: { type: 'select' },
      options: ['center', 'start', 'end', 'between', 'around', 'evenly'],
    },
  },
} satisfies Meta<RowProps>

export default meta
type Story = StoryObj<RowProps>

export const Default: Story = {
  args: {
    content: 'between',
  },
}
export const Primary: Story = {
  args: {},
}
