import { customElement } from 'lit/decorators.js'
import { html, unsafeCSS } from 'lit'
import { Button } from './button'
import style from './text-button.css?inline'

@customElement('text-button')
export class TextButton extends Button {
  render() {
    return html`<button
      type="button"
      class=${`button--text ${this.size} ${this.type} ${this.color} `}
      ?disabled=${this.disabled}
      @click=${this.onClick}
    >
      <slot name="leftIcon"></slot>${this.label}<slot name="rightIcon"></slot>
    </button>`
  }

  static styles = unsafeCSS(style)
}

declare global {
  interface HTMLElementTagNameMap {
    'text-button': TextButton
  }
}