import { Meta, StoryObj } from '@storybook/web-components'
import { ChipProps } from './chip'
import './chip'
import { html } from 'lit'

const meta = {
  title: 'Components/Chip',
  tags: ['autodocs'],
  render: (args: ChipProps) => html`<base-chip label=${args.label}></base-chip>`,
} satisfies Meta<ChipProps>

export default meta
type Story = StoryObj<ChipProps>

export const Default: Story = {
  args: {
    label: '찐 중개',
  },
}

export const primary: Story = {
  args: {
    label: '매물번호 14823510',
  },
}
