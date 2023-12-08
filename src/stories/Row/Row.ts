import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './row.css?inline'

@customElement('base-row')
export class Row extends LitElement {
  render() {
    return html`<div class="row">
      <div>11</div>
      <div>12</div>
      <div>13</div>
    </div>`
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'base-row': Row
  }
}
