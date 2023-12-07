import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

export const customStyle = css`
  @import './input.css';
`

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
  @property({ type: String }) type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'search'
    | 'tel'
    | 'url'
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
          class=${[
            'input',
            `input--${this.size}`,
            `${this.isError ? 'error' : ''}`,
          ].join(' ')}
          placeholder=${this.placeholder}
          value=${this.value || ''}
          ?disabled=${this.disabled}
          @input=${this.onChange}
        />
        ${this.isError && this.helperText
          ? html`<p class="helper-text">${this.helperText}</p>`
          : ''}
      </div>
    `
  }

  static styles = css`
    .input {
      border-radius: 2px;
      cursor: pointer;
      border: 1px solid #eaeaea;
      color: #000;
      font-family: Spoqa Han Sans Neo;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.42px;
      padding: 10px 12px;
      vertical-align: middle;
      background: white;
    }

    .input:focus {
      outline: 1px solid #000;
      color: #000;
    }

    .input:focus::placeholder {
      color: #000;
    }

    .input:disabled {
      color: #aaa;
      border: 1px solid #eaeaea;
      background: #fafafb;
    }

    .input:disabled::placeholder {
      color: #aaa;
    }

    .input.error {
      background: #fff;
      border: 1px solid #f55858;
      color: #000;
    }

    .input.error::placeholder {
      color: #000;
    }

    .helper-text {
      color: #f55858;
      font-family: Spoqa Han Sans Neo;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 157.143% */
      letter-spacing: -0.42px;
      margin: 8px 6px 0 6px;
    }

    .input--secondary {
      color: #333;
      background-color: transparent;
    }

    .input--small {
      font-size: 12px;
    }

    .input--medium {
      font-size: 14px;
    }

    .input--large {
      font-size: 16px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'base-input': Input
  }
}
