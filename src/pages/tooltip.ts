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
      opacity: 0;
      transform: scale(0.75);
      transition: opacity, transform;
      transition-duration: 0.33s;
    }

    :host([showing]) {
      opacity: 1;
      transform: scale(1);
    }
  `

  updateExternalElement() {}

  static lazy(target: Element, callback: (target: SimpleTooltip) => void) {
    const createTooltip = () => {
      const tooltip = document.createElement('simple-tooltip') as SimpleTooltip
      callback(tooltip)
      target.parentNode!.insertBefore(tooltip, target.nextSibling)
      tooltip.show()
      enterEvents.forEach((eventName) => target.removeEventListener(eventName, createTooltip))
    }
    enterEvents.forEach((eventName) => target.addEventListener(eventName, createTooltip))
  }

  @property({ type: Number })
  offset = 4
  @property({ reflect: true, type: Boolean })
  showing = false

  _target: Element | null = null

  get target() {
    return this._target
  }

  set target(target: Element | null) {
    if (this.target) {
      enterEvents.forEach((name) => this.target!.removeEventListener(name, this.show))
      leaveEvents.forEach((name) => this.target!.removeEventListener(name, this.hide))
    }
    if (target) {
      // Add events to new target
      enterEvents.forEach((name) => target!.addEventListener(name, this.show))
      leaveEvents.forEach((name) => target!.addEventListener(name, this.hide))
    }
    this._target = target
  }

  constructor() {
    super()
    this.addEventListener('transitionend', this.finishHide)
  }

  connectedCallback() {
    super.connectedCallback()
    this.hide()
    this.target ??= this.previousElementSibling
  }

  render() {
    return html`<slot></slot>`
  }

  show = () => {
    this.style.cssText = ''
    const { x, y, height } = this.target!.getBoundingClientRect()
    this.style.left = `${x}px`
    this.style.top = `${y + height + this.offset}px`
    this.showing = true
  }

  hide = () => {
    this.showing = false
  }

  finishHide = () => {
    if (!this.showing) {
      this.style.display = 'none'
    }
  }

  addGlobalClickListener() {
    // document.addEventListener('click', (event: Element) => {
    //   // 클릭된 요소가 이 엘리먼트 내부에 있는지 확인
    //   if (!this.contains(event.target)) {
    //     this.hide()
    //   }
    // })
  }
}
