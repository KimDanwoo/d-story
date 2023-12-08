import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './paper.css?inline'

@customElement('base-box')
export class Box extends LitElement {
  render() {
    return html`<div class="paper">
      <slot></slot>
    </div>`
  }

  static styles = unsafeCSS(styles)
}
