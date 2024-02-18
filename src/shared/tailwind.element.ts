import { LitElement, unsafeCSS } from 'lit'

import style from '../styles/global.css?inline'
const tailwindElement = unsafeCSS(style)

export default function TailwindElement(style: unknown): new () => LitElement {
  return class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)]
  }
}
