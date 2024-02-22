import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './chip.css?inline'

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

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'base-chip': Chip
  }
}
