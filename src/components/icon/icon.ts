import { nothing } from 'lit'
import TailwindElement from '../../shared/tailwind.element'
import style from './icon.scss?inline'
import { customElement, property } from 'lit/decorators.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js'
import { until } from 'lit-html/directives/until.js'
import IconMap from './svgFiles'
import textColors from '../../foundations/colors'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface IconProps {
  forcedSize?: number
  size: Size
  viewBox?: string
  name: keyof typeof IconMap
  color: keyof typeof textColors
}

@customElement('base-icon')
export class Icon extends TailwindElement(style) {
  @property({ type: Number, attribute: 'forced-size' }) forcedSize?: number
  @property({ type: String }) size?: Size = 'md'
  @property({ type: String, attribute: 'view-box' }) viewBox: string = '0 0 24 24'
  @property({ type: String }) name: keyof typeof IconMap = 'AgentFill'

  protected override render() {
    const importedIcon = IconMap[this.name]?.().then((iconModule: any) => {
      let parser = new DOMParser()
      const doc = parser.parseFromString(iconModule.default, 'text/html')
      const svg = doc.querySelector('svg')

      if (!svg) return unsafeSVG(doc.body.innerHTML)
      let iconSize = this.setSize()
      svg.setAttribute('width', iconSize.toString())
      svg.setAttribute('height', iconSize.toString())
      svg.setAttribute('viewBox', this.viewBox)
      return unsafeSVG(doc.body.innerHTML)
    })
    return until(importedIcon, nothing)
  }

  protected setSize = () => {
    let iconSize = 24
    switch (this.size) {
      case 'xs':
        iconSize = 16
        break
      case 'sm':
        iconSize = 20
        break
      case 'md':
        iconSize = 28
        break
      case 'lg':
        iconSize = 32
        break
      case 'xl':
        iconSize = 36
        break
      default:
        iconSize = this.forcedSize || 24
        break
    }
    return iconSize
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'base-icon': Icon
  }
}
