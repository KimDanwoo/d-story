import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

export interface ChipProps {
  label: string
}

@customElement('base-chip')
export class Chip extends LitElement {
  @property({ type: String }) label = ''

  constructor() {
    super()
  }

  render() {
    return html` <span class="storybook-chip"> ${this.label} </span> `
  }

  static styles = css`
    .storybook-chip {
      padding: 2px 6px;
      font-size: 13px;
      background: #ecf0f7;
      color: #535c68;
      border-radius: 4px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'base-chip': Chip
  }
}
