import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './row.css?inline'

export interface RowProps {
  content: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'
}

@customElement('base-row')
export class Row extends LitElement {
  @property({ type: String }) content = 'start'
  render() {
    return html`<div class="storybook-row ${this.content}">
      <slot></slot>
    </div>`
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'base-row': Row
  }
}
