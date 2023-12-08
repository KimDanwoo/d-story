import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import styles from './button.css?inline'

export interface ButtonProps {
  color: 'primary' | 'secondary' | 'gray'
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  type: 'basic' | 'solid' | 'round'
  label: string
  disabled: boolean
  onClick?: () => void
}

@customElement('base-button')
export class Button extends LitElement {
  @property({ type: String }) color?: 'primary' | 'secondary' | 'gray'
  @property({ type: String }) backgroundColor?: string
  @property({ type: String }) size?: 'small' | 'medium' | 'large'
  @property({ type: String }) type?: 'basic' | 'solid' | 'round'
  @property({ type: String }) label: string = ''
  @property({ type: Boolean }) disabled: boolean = false
  @property({ attribute: false }) onClick?: () => void

  render() {
    return html`
      <button
        type="button"
        class=${`button button--${this.size || 'medium'} button--${
          this.color
        } button-${this.type}`}
        style=${styleMap({ backgroundColor: this.backgroundColor })}
        _disabled=${this.disabled || false}
        @click=${this.onClick}
      >
        ${this.label}
      </button>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'base-button': Button
  }
}
