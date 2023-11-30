import type { Meta, StoryObj } from '@storybook/web-components'
import type { InputProps } from './Input'
import './Input'
import { html } from 'lit'

const Template = (args: InputProps) => html`
  <base-input
    type="${args.type || 'text'}"
    size=${args.size || 'small'}
    placeholder=${args.placeholder || '내용을 입력하세요'}
    value=${args.value || ''}
    helperText=${args.helperText || ''}
    ?disabled=${args.disabled || false}
    ?isError=${args.isError || false}
    @change=${args.onChange}
  ></base-input>
`

const meta = {
  title: 'Components/Form/Input',
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onChange: { action: 'onChange' },
  },
} satisfies Meta<InputProps>

export default meta
type Story = StoryObj<InputProps>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: '',
    size: 'large',
    value: '',
    disabled: false,
    isError: false,
    helperText: '',
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: '',
    size: 'large',
    value: '',
    disabled: true,
    isError: false,
  },
}

export const Error: Story = {
  args: {
    type: 'text',
    placeholder: '',
    size: 'large',
    value: '',
    disabled: true,
    isError: true,
    helperText: '에러가 발생했습니다.',
  },
}
