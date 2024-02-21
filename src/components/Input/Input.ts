import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './input.css?inline'

export interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url'
  size?: 'small' | 'medium' | 'large'
  placeholder?: string
  value?: string
  disabled?: boolean
  isError?: boolean
  helperText?: string
  onChange?: () => void
}

@customElement('base-input')
export class Input extends LitElement {
  @property({ type: String }) type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url'
  @property({ type: String }) size?: string
  @property({ type: String }) placeholder = ''
  @property({ type: String }) value?: string
  @property({ type: String }) helperText?: string
  @property({ type: Boolean }) disabled?: boolean
  @property({ type: Boolean }) isError?: boolean
  @property({ attribute: false }) onChange?: () => void

  render() {
    return html`
      <div>
        <input
          type=${this.type || 'text'}
          class=${['input', `input--${this.size}`, `${this.isError ? 'error' : ''}`].join(' ')}
          placeholder=${this.placeholder}
          value=${this.value || ''}
          ?disabled=${this.disabled}
          @input=${this.onChange}
        />
        ${this.isError && this.helperText ? html`<p class="helper-text">${this.helperText}</p>` : ''}
      </div>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'base-input': Input
  }
}
