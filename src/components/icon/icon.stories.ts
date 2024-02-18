import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import { IconProps } from './icon'
import IconMap from './svgFiles'
import textColors from '../../foundations/colors'

// More on how to set up stories at: https://storybook.js.org/doㄹcs/web-components/writing-stories/introduction
const Template = (args: IconProps) => html`
  <base-icon forced-size=${args.forcedSize} view-box=${args.viewBox} name=${args.name} size=${args.size}></base-icon>
`

const meta = {
  title: 'Components/Icon',
  tags: ['autodocs'],
  component: 'base-icon',
  loaders: [async () => ({ Icon: await import('./icon') })], // svg 비동기처리
  render: Template,
  argTypes: {
    forcedSize: { action: 'nubmer' },
    viewBox: {
      control: 'text',
      description: 'min-x min-y width height <br/> default: 0 0 24 24',
    },
    name: {
      control: { type: 'select' },
      options: Object.keys(IconMap),
      description: '아이콘명',
    },
    size: {
      if: { arg: 'forcedSize', eq: 0 },
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'select' },
      options: textColors,
    },
  },
  args: {
    viewBox: '0 0 24 24',
    name: 'ArrowRight',
  },
} satisfies Meta<IconProps>

export default meta

type Story = StoryObj<IconProps>

const IconTemplate = (args: IconProps, { loaded: { Icon } }) => {
  return html`
    <div class=${args.color}>
      <base-icon name=${args.name || 'ArrowRight'} forced-size=${args.forcedSize} size=${args.size}></base-icon>
    </div>
  `
}
export const Icon: Story = {
  loaders: [async () => ({ Icon: await import('./icon') })], // svg 비동기처리
  args: {
    forcedSize: 0,
    name: 'ArrowRight',
    size: 'md',
  },
}

const users = ['User', 'UserFill', 'Gender', 'Roommate']
const arrows = [
  'ArrowExchangeHorizontal',
  'ArrowExchangeVertical',
  'ArrowDown',
  'ArrowUp',
  'ArrowRight',
  'ArrowLeft',
  'ShevronDown',
  'ShevronUp',
  'ShevronRight',
  'ShevronLeft',
  'ShevronDoubleRight',
  'ShevronDoubleLeft',
  'Repeat',
  'Reset',
  'ZoomIn',
  'Download',
  'Upload',
  'Share',
  'CaretDownFill',
  'CaretDownFillSmall',
  'ChangeMeasure',
  'ChangeSqaremeter',
]

const interfaces = ['Backspace', 'SettingFill', 'Setting', 'HamburgerMenu', 'Menu', 'List']
const IconsTemplate = (args: IconProps, { loaded: { Icon } }) => {
  return html`
    <div>01. Users</div>
    <div style="display:grid;grid-template-columns: repeat(20, 1fr);row-gap:10px;">
      ${Object.keys(IconMap).map((key) => {
        if (users.indexOf(key) < 0) return
        return html` <base-icon name=${key} forced-size=${args.forcedSize}></base-icon> `
      })}
    </div>
    <br />
    <div>02. Arrows</div>
    <div style="display:grid;grid-template-columns: repeat(20, 1fr);row-gap:10px;">
      ${Object.keys(IconMap).map((key) => {
        if (arrows.indexOf(key) < 0) return
        return html` <base-icon name=${key} forced-size=${args.forcedSize} /> `
      })}
    </div>
    <br />
    <div>03. Interfaces</div>
    <div style="display:grid;grid-template-columns: repeat(20, 1fr);row-gap:10px;">
      ${Object.keys(IconMap).map((key) => {
        if (interfaces.indexOf(key) < 0) return
        return html` <base-icon name=${key} forced-size=${args.forcedSize}></base-icon> `
      })}
    </div>
  `
}
export const Icons = {
  render: IconsTemplate,
  args: {
    forcedSize: 24,
  },
}
