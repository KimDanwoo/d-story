import { Meta } from '@storybook/web-components'
import '../components/Icons/PlusIcon'
import '../components/Icons/PersonIcon'
import '../components/Icons/UserIcon'

import { html } from 'lit'

const meta = {
  title: 'Components/Icons',
  tags: ['autodocs'],
  render: (args) => html`<base-avatar link=${args.link}></base-avatar>`,
} satisfies Meta<any>

export default meta

export const Icons = {
  render: () => html`<div style="display:flex; height:20px">
    <plus-icon color="black"></plus-icon>
    <person-icon color="black"></person-icon>
    <user-icon color="black"></user-icon>
  </div>`,
}

export const elseIcon = {
  render: () => html`<plus-icon></plus-icon>`,
}
