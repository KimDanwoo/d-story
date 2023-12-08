import { html } from 'lit'
import './Paper'
import { StoryObj } from '@storybook/web-components'
const meta = {
  title: 'Components/Box',
  tags: ['autodocs'],
  render: (args: any) => html`<base-box></base-box>`,
}

export default meta
type Story = StoryObj<any>

export const Default: Story = {
  args: {},
}
