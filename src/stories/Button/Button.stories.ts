import type { Meta, StoryObj } from '@storybook/web-components'
import type { ButtonProps } from './Button'
import './Button'
import { html } from 'lit'

const Template = (args: ButtonProps) => html`
  <basic-button
    style="margin: 0 0.5rem"
    color=${args.color || 'primary'}
    backgroundColor=${args.backgroundColor || ''}
    size=${args.size || 'medium'}
    label=${args.label}
    type=${args.type || 'basic'}
    disabled{args.disabled}
    @click=${args.onClick}
  ></basic-button>
`

const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'gray'],
    },
  },
  component: 'my-button',
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Primary = () => html`
  <div style="display:flex">
    ${Template.bind({})({ label: 'Click Me!', type: 'basic' })}
    ${Template.bind({})({ label: 'Click Me!', type: 'solid' })}
    ${Template.bind({})({ label: 'Click Me!', type: 'round' })}
  </div>
`
// {
//   args: {
//     color: 'primary',
//     label: 'Click Me!',
//   },
// }

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Click Me!',
  },
}

export const Gray: Story = {
  args: {
    color: 'gray',
    label: 'Click Me!',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Click Me!',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Click Me!',
  },
}
