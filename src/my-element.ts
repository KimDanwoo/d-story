import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import './stories/Button/Button.stories'
@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <main>
        <slot></slot>
      </main>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
