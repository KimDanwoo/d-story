import { LitElement, html, css } from 'lit'
import { customElement, state, query, property } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'

type ToDoItem = {
  text: string
  completed: boolean
}

@customElement('todo-list')
export class ToDoList extends LitElement {
  // TODO: Add styles here
  static styles = css`
    section {
      width: 600px;
      margin: 32px auto;
    }

    .todo-list {
      margin-top: 20px;
      min-height: 200px;
    }

    .todo-list li {
      cursor: pointer;
      padding: 6px 0;
    }

    .completed {
      text-decoration-line: line-through;
      color: #777;
    }

    .completed-box {
      margin-top: 20px;
    }
  `

  @state()
  private _listItems = [
    { text: 'TODO LIST 만들기', completed: true },
    { text: '퇴근하고 빨래 정리하기', completed: false },
  ]

  @property({ type: Boolean }) hideCompleted = false

  render() {
    const filterTodoList = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems

    const todoList = map(
      filterTodoList,
      (item) =>
        html` <li
          class="TODO ${item.completed ? 'completed' : ''}"
          @click=${() => this.toggleCompleted(item)}
        >
          ${item.text}
        </li>`
    )

    const caughtUpMessage = html`<p>할일을 모두 마쳤어요!</p>`

    const todoListOrMessage =
      filterTodoList.length > 0 ? todoList : caughtUpMessage

    return html`
      <section>
        <h1>오늘의 할일</h1>
        <ul class="todo-list">
          ${todoListOrMessage}
        </ul>
        <div>
          <input id="todoInput" aria-label="New item" />
          <button @click=${this.addToDo}>등록</button>
        </div>
        <div class="completed-box">
          <input
            type="checkbox"
            id="hideCompleted"
            @change=${this.setHideCompleted}
            ?checked=${this.hideCompleted}
          />
          <label for="hideCompleted">완료된 항목 숨기기</label>
        </div>
      </section>
    `
  }

  toggleCompleted(item: ToDoItem) {
    item.completed = !item.completed
    this.requestUpdate()
  }

  setHideCompleted(event: Event) {
    this.hideCompleted = (event.target as HTMLInputElement).checked
  }

  @query('#todoInput')
  input!: HTMLInputElement

  addToDo() {
    if (!this.input.value) return
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false },
    ]
    this.input.value = ''
  }
}
