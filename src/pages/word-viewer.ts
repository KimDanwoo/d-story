import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

@customElement('word-viewer')
class WordViewer extends LitElement {
  static styles = css`
    :host {
      background: white;
      color: violet;
      cursor: pointer;
      display: block;
    }

    div {
      width: 150px;
      height: 150px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid violet;
      margin: auto;
      margin-top: 20px;
    }

    .backwards {
      color: white;
      background-color: violet;
      border: none;
    }
  `
  @state() private idx = 0
  @state() private playDirection: -1 | 1 = 1
  @property({ type: String }) words = 'initial value'

  private intervalTimer?: NodeJS.Timeout
  connectedCallback() {
    super.connectedCallback()
    this.intervalTimer = setInterval(this.tickToNextWord, 1000)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    clearInterval(this.intervalTimer)
    this.intervalTimer = undefined
  }

  render() {
    const splitWords = this.words.split('.')
    const idx =
      ((this.idx % splitWords.length) + splitWords.length) % splitWords.length
    const word = splitWords[idx]
    return html`
      <div
        class=${classMap({ backwards: this.playDirection === -1 })}
        @click=${this.togglePlayDirection}
      >
        ${word}
      </div>
    `
  }

  tickToNextWord = () => {
    this.idx += this.playDirection
  }

  togglePlayDirection() {
    this.playDirection *= -1
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'word-viewer': WordViewer
  }
}
