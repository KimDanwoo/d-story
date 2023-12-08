import { StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './Row'
const meta = {
  title: 'Components/Row',
  tags: ['autodocs'],
  render: (args: any) => html`<base-row></base-row>`,
}

export default meta
type Story = StoryObj<any>

export const Default: Story = {
  args: {},
}
export const Primary: Story = {
  args: {},
}
