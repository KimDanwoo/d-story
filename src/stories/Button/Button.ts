import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

export interface ButtonProps {
  color: 'primary' | 'secondary' | 'gray'
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  type: 'basic' | 'solid' | 'round'
  label: string
  disabled: boolean
  onClick?: () => void
}

@customElement('basic-button')
export class Button extends LitElement {
  @property({ type: String }) color?: string
  @property() backgroundColor?: string
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

  static styles = css`
    .button {
      font-family: Spoqa Han Sans Neo;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: -0.48px;
      border: 0;
      cursor: pointer;
    }

    .button:disabled {
      background-color: black;
    }

    .button-basic {
      border-radius: 0.25rem;
    }

    .button-solid {
      border-radius: 0rem;
    }

    .button-round {
      border-radius: 45px;
    }

    .button--primary {
      color: #fff;
      background: #1db177;
    }
    .button--secondary {
      color: white;
      background-color: #535c68;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }
    .button--gray {
      color: #666666;
      background-color: #f5f5f5;
    }
    .button--small {
      font-size: 12px;
      padding: 10px 16px;
    }
    .button--medium {
      font-size: 14px;
      padding: 11px 20px;
    }
    .button--large {
      font-size: 16px;
      padding: 12px 24px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'basic-button': Button
  }
}
