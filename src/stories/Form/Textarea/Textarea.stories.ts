import type { Meta, StoryObj } from '@storybook/web-components'
import type { TextareaProps } from './Textarea'
import { Textarea } from './Textarea'
import { html } from 'lit'

const Template = (args: TextareaProps) => html`
  <base-textarea
    size=${args.size || 'small'}
    placeholder=${args.placeholder || '내용을 입력하세요'}
    value=${args.value || ''}
    ?disabled=${args.disabled || false}
    @change=${args.onChange}
  ></base-textarea>
`

const meta = {
  title: 'Components/Form/Textarea',
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    onChange: { action: 'onChange' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  component: 'my-button',
} satisfies Meta<TextareaProps>

export default meta
type Story = StoryObj<TextareaProps>

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    placeholder: '텍스트를 입력하세요',
    value: '입력한 텍스트',
  },
}

// export const Secondary: Story = {
//   args: {
//     placeholder: '텍스트를 입력하세요',
//     value: '입력한 텍스트',
//   },
// }

// export const Large: Story = {
//   args: {
//     size: 'large',
//     placeholder: '텍스트를 입력하세요',
//     value: '입력한 텍스트',
//   },
// }

// export const Small: Story = {
//   args: {
//     size: 'small',
//     placeholder: '텍스트를 입력하세요',
//     value: '입력한 텍스트',
//   },
// }
