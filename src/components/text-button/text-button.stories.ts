import type { Meta, StoryObj } from '@storybook/web-components'
import type { Button } from '../button/button'
import './text-button'
import { html } from 'lit'
// import '../Icons/PlusIcon'

const Template = (args: Button) => html`
  <text-button
    style="margin: 0 0.5rem"
    color=${args.color || 'primary'}
    backgroundColor=${args.backgroundColor || ''}
    size=${args.size || 'md'}
    label=${args.label}
    type=${args.type || 'basic'}
    ?disabled=${args.disabled}
    @click=${args.onClick}
  ></text-button>
`

const meta = {
  title: 'Components/TextButton',
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    type: {
      control: { type: 'select' },
      options: ['basic', 'solid', 'round'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
  component: 'text-button',
} satisfies Meta<Button>

export default meta
type Story = StoryObj<Button>

export const Default: Story = {
  args: {
    size: 'lg',
    label: 'Click Me!',
    color: 'primary',
  },
}

export const Primary = {
  render: () => html`
    <div style="display:flex">
      <text-button style="margin-right:6px" label="click me!"></text-button>
      <text-button style="margin-right:6px" label="click me!" type="solid"></text-button>
      <text-button style="margin-right:6px" label="click me!" type="round"></text-button>
    </div>
  `,
}

export const Secondary = {
  render: () => html`
    <div style="display:flex">
      <text-button style="margin-right:6px" label="click me!" size="lg" color="secondary"></text-button>
      <text-button style="margin-right:6px" label="click me!" size="lg" color="secondary" type="solid"></text-button>
      <text-button style="margin-right:6px" label="click me!" size="lg" color="secondary" type="round"></text-button>
    </div>
  `,
}

export const Gray = {
  render: () => html`
    <div style="display:flex">
      <text-button style="margin-right:6px" label="click me!" size="lg" color="gray"></text-button>
      <text-button style="margin-right:6px" label="click me!" size="lg" color="gray" type="solid"></text-button>
      <text-button style="margin-right:6px" label="click me!" size="lg" color="gray" type="round"></text-button>
    </div>
  `,
}

export const IconButton = {
  render: () =>
    html` <div style="display:flex">
      <text-button style="margin-right:6px" size="lg">
        <!-- <plus-icon slot="leftIcon" color="#1DB177"></plus-icon> -->
      </text-button>
      <text-button style="margin-right:6px" size="lg" label="Click Me!">
        <!-- <plus-icon slot="leftIcon" color="#1DB177"></plus-icon> -->
      </text-button>
      <text-button style="margin-right:6px" size="lg" label="Click Me!">
        <!-- <plus-icon slot="rightIcon" color="#1DB177"></plus-icon> -->
      </text-button>
    </div>`,
}
