import { LitElement, html } from 'lit'
import './textarea.css'

export interface TextareaProps {
  size?: 'small' | 'medium' | 'large'
  placeholder: string
  value: string
  disabled: boolean
  onChange?: () => void
}

export class Textarea extends LitElement {
  render() {
    return html`
      <textarea
        class="storybook-textarea"
        placeholder="텍스트를 입력하세요"
      ></textarea>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'base-textarea': Textarea
  }
}
