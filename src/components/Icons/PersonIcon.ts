import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('person-icon')
export class PlusIcon extends LitElement {
  @property({ type: String }) color? = 'white'
  @property({ type: String }) size? = '24'
  render() {
    const iconWrapperStyle = `width:${this.size}px!important; height:${this.size}px!important;`
    return html`<div style=${iconWrapperStyle}>
      <svg
        width=${this.size}
        height=${this.size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.95357 8.68259C6.95357 6.09647 8.98907 4 11.5 4C14.0109 4 16.0464 6.09647 16.0464 8.68259C16.0464 11.2687 14.0109 13.3652 11.5 13.3652C8.98907 13.3652 6.95357 11.2687 6.95357 8.68259ZM14.8604 8.68259C14.8604 6.77111 13.3559 5.22155 11.5 5.22155C9.6441 5.22155 8.13959 6.77111 8.13959 8.68259C8.13959 10.5941 9.6441 12.1436 11.5 12.1436C13.3559 12.1436 14.8604 10.5941 14.8604 8.68259Z"
          fill=${this.color}
        />
        <path
          d="M3.05126 20.141C5.12509 15.3352 10.5889 13.1708 15.255 15.3067C17.3467 16.2642 19.0191 17.9867 19.9487 20.141C20.0818 20.4493 19.947 20.8102 19.6477 20.9472C19.3484 21.0842 18.998 20.9454 18.8649 20.6371C18.0546 18.7592 16.5966 17.2576 14.7733 16.423C10.7058 14.561 5.94286 16.4478 4.13506 20.6371C4.00205 20.9454 3.6516 21.0842 3.35232 20.9472C3.05303 20.8102 2.91824 20.4493 3.05126 20.141Z"
          fill=${this.color}
        />
      </svg>
      </svg>
    </div> `
  }
}
