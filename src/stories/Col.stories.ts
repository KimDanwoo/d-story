import { html } from 'lit'
import { Meta, StoryObj } from '@storybook/web-components'
import '../components/Col/index'
import { ColProps } from '../components/Col/index'

const meta = {
  title: 'Components/Col',
  tags: ['autodocs'],
  render: (args: ColProps) =>
    html`<base-row content=${args.items || 'start'}>
      <p>1번 항목</p>
      <p>2번 항목</p>
      <p>3번 항목</p>
    </base-row>`,
  argTypes: {
    items: {
      control: { type: 'select' },
      options: ['center', 'start', 'end'],
    },
  },
} satisfies Meta<ColProps>

export default meta
type Story = StoryObj<ColProps>

export const Default: Story = {
  args: {
    items: 'center',
  },
}
export const Primary: Story = {
  args: {},
}
