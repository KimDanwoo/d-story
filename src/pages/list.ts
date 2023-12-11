import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import type { TemplateResult } from 'lit'

@customElement('list-item')
export class ListItem extends LitElement {
  @state()
  friends = ['해리', '론', '헤르미온느']

  @state()
  pets = [
    { name: '민수', species: 'Owl' },
    { name: '영철', species: 'Rat' },
    { name: '건우', species: 'Cat' },
  ]

  @state()
  includePets = true

  render() {
    const listItems: TemplateResult[] = []
    // TODO: populate templates with items to render.
    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`)
    })
    if (this.includePets) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name} - ${pet.species}</li>`)
      })
    }
    return html`
      <button @click=${this._togglePetVisibility}>
        ${this.includePets ? 'Hide' : 'Show'} pets
      </button>
      <p>My magical friends</p>
      <ul>
        <!-- TODO: Render templates. -->
        ${listItems}
      </ul>
    `
  }

  private _togglePetVisibility() {
    this.includePets = !this.includePets
  }
}
