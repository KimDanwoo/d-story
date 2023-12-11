import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './col.css?inline'

export interface ColProps {
  items: 'center' | 'start' | 'end'
  content: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'
}

@customElement('base-col')
export class Col extends LitElement {
  @property({ type: String }) items = 'start'
  render() {
    return html`<div class="storybook-col align-${this.items}">
      <slot></slot>
    </div>`
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'base-col': Col
  }
}
