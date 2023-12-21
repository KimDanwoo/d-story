import { LitElement, html, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('date-display')
export class DateDisplay extends LitElement {
  @property({ attribute: false })
  date = new Date()

  @property({ type: String, attribute: 'date-str' })
  dateStr = ''

  willUpdate(changed: PropertyValues<this>) {
    if (changed.has('dateStr') && this.dateStr) {
      this.date = new Date(this.dateStr)
    }
  }

  render() {
    const locale = 'ko-KR'
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return html`
      <p>입력한 날씨는: ${this.date.toLocaleDateString(locale, options)}</p>
    `
  }
}
