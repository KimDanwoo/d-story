import type { Meta, StoryObj } from '@storybook/web-components'
import type { Radio } from './radio'
import './radio'
import '../icon/icon'
import { html } from 'lit'
import { SIZES } from '../../constants/index'

const Template = (args: Radio) => html`
  <dwc-radio
    size=${args.size || 'sm'}
    options=${args.options}
    value=${args.value}
    customStyle=${args.customStyle}
    direction=${args.direction}
    alignItem=${args.alignItem}
    justifyContent=${args.justifyContent}
    ?disabled=${args.disabled}
    .options=${args.options}
    .onClick=${args.onClick}
  />
`

const meta = {
  title: 'Components/Radio',
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: SIZES.filter((size) => ['sm', 'md'].includes(size)),
      defaultValue: 'sm',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    direction: {
      control: {
        type: 'select',
      },
      options: ['row', 'column'],
    },
    alignItem: {
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    justifyContent: {
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
  },
  component: 'dwc-button',
} satisfies Meta<Radio>

export default meta
type Story = StoryObj<Radio>

let fruit = '딸기'
const onClick = (e: Event) => {
  fruit = (e.target as HTMLInputElement).value
}

export const Default: Story = {
  args: {
    size: 'sm',
    value: fruit,
    options: ['사과', '수박', '딸기', '참외'],
    onClick,
    direction: 'column',
    alignItem: 'start',
    justifyContent: 'between',
  },
}
