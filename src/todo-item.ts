import { LitElement, html, css } from 'lit'
import { customElement, state, query, property } from 'lit/decorators.js'

type ToDoItem = {
  text: string
  completed: boolean
}

@customElement('todo-list')
export class ToDoList extends LitElement {
  // TODO: Add styles here

  @state()
  private listItems: ToDoItem[] = [
    { text: '밥먹기', completed: true },
    { text: '청소하기', completed: false },
    { text: '노래하기', completed: false },
    { text: '코딩하기', completed: false },
    { text: '요리하기', completed: false },
  ]
  @property()
  hideCompleted: boolean = false

  render() {
    const filterItems = this.hideCompleted
      ? this.listItems.filter((item) => !item.completed)
      : this.listItems

    const todoList = html`
      <ul>
        ${filterItems.map(
          (item) =>
            html` <li
              class=${item.completed ? 'TODO completed' : 'TODO'}
              @click=${() => this.toggleCompleted(item)}
            >
              ${item.text}
            </li>`
        )}
      </ul>
    `

    const todoOrMessage = filterItems.length ? todoList : '할일이 없습니다.'

    return html`
      <h2>할일 목록</h2>
      <ul>
        ${todoOrMessage}
      </ul>
      <input id="newTodo" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
      <br />
      <label>
        <input
          type="checkbox"
          ?checked=${this.hideCompleted}
          @change=${() => (this.hideCompleted = !this.hideCompleted)}
        />
        완료항목 숨기기
      </label>
    `
  }

  toggleCompleted(item: ToDoItem) {
    item.completed = !item.completed
    this.requestUpdate()
  }

  @query('#newTodo')
  input!: HTMLInputElement

  addToDo() {
    if (this.input.value) {
      this.listItems = [
        ...this.listItems,
        { text: this.input.value, completed: false },
      ]
      this.input.value = ''
      return
    }
    alert('문자를 입력하세요')
  }

  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-list': ToDoList
  }
}
