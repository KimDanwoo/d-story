import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// Events to turn on/off the tooltip
const enterEvents = ['pointerenter', 'focus']
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click']

@customElement('simple-tooltip')
export class SimpleTooltip extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: fixed;
      padding: 4px;
      border-radius: 4px;
      background: black;
      color: white;
      pointer-events: none;
    }
  `

  @property({ type: Number })
  offset = 4

  _target: Element | null = null

  get target() {
    return this._target
  }
  set target(target: Element | null) {
    if (this.target) {
      enterEvents.forEach((name) =>
        this.target!.removeEventListener(name, this.show)
      )
      leaveEvents.forEach((name) =>
        this.target!.removeEventListener(name, this.hide)
      )
    }
    if (target) {
      // Add events to new target
      enterEvents.forEach((name) => target!.addEventListener(name, this.show))
      leaveEvents.forEach((name) => target!.addEventListener(name, this.hide))
    }
    this._target = target
  }

  connectedCallback() {
    super.connectedCallback()
    this.hide()
    // Setup target if needed
    this.target ??= this.previousElementSibling
  }

  render() {
    return html`<slot></slot>`
  }

  show = () => {
    this.style.cssText = ''
  }

  hide = () => {
    this.style.display = 'none'
  }
}
