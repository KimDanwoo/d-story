import { Header } from './stories/Header/Header'
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('main-page')
export class MainPage extends LitElement {
  @property({ type: Boolean })
  checked: boolean = false
  name: string = 'World'

  changeName(event: Event) {
    const input = event.target as HTMLInputElement
    this.name = input.value
  }

  render() {
    return html`
      <main class="main-wrap">
        ${Header({
          user: { name: 'danwoo' },
          onLogin: () => {},
          onLogout: () => {},
          onCreateAccount: () => {},
        })}
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
