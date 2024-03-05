import { TemplateResult, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './radio.scss?inline'
import TailwindElement from '@/shared/tailwind.element'
import '@/components/icon/icon'

@customElement('dwc-radio')
export class Radio extends TailwindElement(styles) {
  @property({ type: String }) size?: 'sm' | 'md' = 'sm'
  @property({ type: Boolean }) disabled: boolean = false
  @property({ type: Function }) onClick?: (checked: Event) => void
  @property({ type: Array }) options: string[] = []
  @property({ type: String }) value: string = ''
  @property({ type: String }) customStyle: string = ''
  @property({ type: String }) direction: string = 'row'
  @property({ type: String }) alignItem: string = 'start'
  @property({ type: String }) justifyContent: string = 'start'

  connectedCallback(): void {
    super.connectedCallback()
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
  }

  protected render(): TemplateResult {
    const directionClass = `direction-${this.direction}`
    const alignClass = `align-${this.alignItem}`
    const justifyClass = `justify-${this.justifyContent}`
    const radioGroupClasses = `radio-group ${directionClass} ${alignClass} ${justifyClass}`
    return html`<div class=${radioGroupClasses}>${this.options.map((option) => this._radio(option))}</div>`
  }

  private _radio(option: string) {
    const activeClass = `${option === this.value ? 'active' : ''}`
    const disabledClass = `${this.disabled ? 'disabled' : ''}`
    const optionClass = `${activeClass} ${disabledClass}`
    const labelClass = `${activeClass} ${disabledClass} label--${this.size}`
    return html`
      <div class="radio-element">
        <input
          type="radio"
          id="${option}"
          value=${option}
          ?checked="${option === this.value}"
          ?disabled="${this.disabled}"
          class="radio"
          @click=${this._handleRadioChange}
          hidden
        />
        <label for=${option} class="radio-circle ${optionClass}"></label>
        <label for="${option}" class="custom-radio ${labelClass}"><span>${option}</span></label>
      </div>
    `
  }

  private _handleRadioChange(e: Event): void {
    if (this.disabled) return
    const target = e.target as HTMLInputElement
    this.value = target.value
    if (this.onClick) {
      this.onClick(e)
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-radio': Radio
  }
}
