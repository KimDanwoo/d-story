import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import styles from './button.css?inline'
import TailwindElement from '../../shared/tailwind.element'

@customElement('base-button')
export class Button extends TailwindElement(styles) {
  @property({ type: String }) color?: 'primary' | 'secondary' | 'gray' = 'primary'
  @property({ type: String }) backgroundColor?: string
  @property({ type: String }) size?: 'sm' | 'md' | 'lg' | 'xl' = 'md'
  @property({ type: String }) type?: 'basic' | 'solid' | 'round' = 'basic'
  @property({ type: String }) label: string = ''
  @property({ type: Boolean }) disabled: boolean = false
  @property({ attribute: false }) onClick?: () => void

  render() {
    return html`
      <button
        type="button"
        class=${`button button--${this.size} button--${this.color} button-${this.type}`}
        style=${styleMap({ backgroundColor: this.backgroundColor })}
        ?disabled=${this.disabled}
        @click=${this.onClickButton}
      >
        <slot name="leftIcon"></slot>${this.label}<slot name="rightIcon"></slot>
      </button>
    `
  }

  protected onClickButton() {
    if (this.disabled) return
    if (this.onClick) {
      this.onClick()
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'base-button': Button
  }
}