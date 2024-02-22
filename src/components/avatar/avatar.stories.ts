import { SIZES } from './../../constants/index'
import { Meta, StoryObj } from '@storybook/web-components'
import type { Avatar } from './avatar'
import './avatar'
import { html } from 'lit'

const meta = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: (args: Avatar) => html`<base-avatar link=${args.link} size=${args.size}></base-avatar>`,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: SIZES,
    },
  },
} satisfies Meta<Avatar>

export default meta
type Story = StoryObj<Avatar>

export const Default: Story = {
  args: {
    link: '',
    size: 'md',
  },
}

export const DefaultImage = {
  render: () => html`
    <div style="display:flex">
      <base-avatar size="sm" style="margin-right:12px;"></base-avatar>
      <base-avatar size="md" style="margin-right:12px;"></base-avatar>
      <base-avatar size="lg" style="margin-right:12px;"></base-avatar>
      <base-avatar size="xl" style="margin-right:12px;"></base-avatar>
    </div>
  `,
}

export const HasImage = {
  render: () => html`
    <div style="display:flex">
      <base-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="sm"
        style="margin-right:12px;"
      ></base-avatar>
      <base-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="md"
        style="margin-right:12px;"
      ></base-avatar>
      <base-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="lg"
        style="margin-right:12px;"
      ></base-avatar>
      <base-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="xl"
        style="margin-right:12px;"
      ></base-avatar>
      <base-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="xl"
        style="margin-right:12px;"
      ></base-avatar>
    </div>
  `,
}
