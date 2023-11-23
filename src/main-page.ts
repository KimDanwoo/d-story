import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './stories/Button/Button.stories'
@customElement('main-page')
export class MainPage extends LitElement {
  @property()
  checked: boolean = false
  name: string = 'World'

  changeName(event: Event) {
    const input = event.target as HTMLInputElement
    this.name = input.value
  }

  render() {
    return html`
      <main class="main-wrap">
        <slot></slot>
      </main>
    `
  }

  static styles = css`
    .main-wrap {
      max-width: 1280px;
      margin: auto;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'main-page': MainPage
  }
}
